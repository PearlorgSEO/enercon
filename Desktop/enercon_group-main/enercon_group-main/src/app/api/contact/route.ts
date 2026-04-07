import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface ContactBody {
  formType?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
  interestedIn?: string[];
  company?: string;
  phone?: string;
  website?: string;
  product?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  experience?: string;
  taxId?: string;
  about?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_FORM_TYPES = new Set(['contact', 'applicator']);
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const requestLog = new Map<string, number[]>();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

let smtpVerified = false;

function cleanString(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 4000);
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 20);
}

function stripHeaderUnsafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];
  const fresh = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  fresh.push(now);
  requestLog.set(ip, fresh);
  return fresh.length > RATE_LIMIT_MAX_REQUESTS;
}

async function ensureSmtpReady() {
  if (smtpVerified) return;
  await transporter.verify();
  smtpVerified = true;
}

export async function POST(request: Request) {
  try {
    const missingEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'].filter(
      key => !process.env[key]
    );
    if (missingEnv.length) {
      console.error('Missing required SMTP env vars:', missingEnv);
      return NextResponse.json(
        { error: `Server is not configured (${missingEnv.join(', ')})` },
        { status: 500 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    let body: ContactBody;
    try {
      body = (await request.json()) as ContactBody;
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const {
      formType = 'contact',
      firstName,
      lastName,
      email,
      subject,
      message,
      interestedIn,
      company,
      phone,
      website,
      product,
      address,
      city,
      state,
      zipCode,
      country,
      experience,
      taxId,
      about,
    } = body;

    if (!ALLOWED_FORM_TYPES.has(formType)) {
      return NextResponse.json({ error: 'Invalid form type.' }, { status: 400 });
    }

    const isApplicator = formType === 'applicator';
    const normalized = {
      firstName: cleanString(firstName).slice(0, 120),
      lastName: cleanString(lastName).slice(0, 120),
      email: cleanString(email).toLowerCase().slice(0, 254),
      subject: cleanString(subject).slice(0, 180),
      message: cleanString(message),
      interestedIn: normalizeStringArray(interestedIn),
      company: cleanString(company).slice(0, 180),
      phone: cleanString(phone).slice(0, 60),
      website: cleanString(website).slice(0, 300),
      product: cleanString(product).slice(0, 180),
      address: cleanString(address).slice(0, 300),
      city: cleanString(city).slice(0, 120),
      state: cleanString(state).slice(0, 120),
      zipCode: cleanString(zipCode).slice(0, 40),
      country: cleanString(country).slice(0, 120),
      experience: cleanString(experience).slice(0, 300),
      taxId: cleanString(taxId).slice(0, 120),
      about: cleanString(about),
    };

    const requiredKeys = isApplicator
      ? ['firstName', 'lastName', 'email', 'company', 'phone', 'website', 'product', 'address', 'city', 'state', 'country']
      : ['firstName', 'lastName', 'email', 'message'];

    const missing = requiredKeys.filter((key) => {
      const value = normalized[key as keyof typeof normalized];
      return typeof value === 'string' ? !value : false;
    });

    if (isApplicator && normalized.interestedIn.length === 0) {
      missing.push('interestedIn');
    }

    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(normalized.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!isApplicator && normalized.message.length < 5) {
      return NextResponse.json({ error: 'Message is too short.' }, { status: 400 });
    }

    const to = process.env.CONTACT_FORM_TO ?? process.env.SMTP_USER;
    const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

    const contactSenderName = `${normalized.firstName} ${normalized.lastName}`.trim();
    const mailSubject = isApplicator
      ? `[Applicator Application] ${normalized.company || contactSenderName || 'New application'}`
      : normalized.subject
      ? `[Website Contact] ${normalized.subject} - ${contactSenderName || normalized.email}`
      : `[Website Contact] New message - ${contactSenderName || normalized.email}`;

    const safeSubject = stripHeaderUnsafe(mailSubject).slice(0, 220);
    const safeReplyTo = stripHeaderUnsafe(normalized.email);

    const lines: string[] = [];
    if (isApplicator) {
      lines.push(
        'Applicator Application',
        '',
        `Name: ${normalized.firstName} ${normalized.lastName}`,
        `Email: ${normalized.email}`
      );
      if (normalized.interestedIn.length) lines.push(`Interested in: ${normalized.interestedIn.join(', ')}`);
      if (normalized.company) lines.push(`Company: ${normalized.company}`);
      if (normalized.phone) lines.push(`Phone: ${normalized.phone}`);
      if (normalized.website) lines.push(`Website: ${normalized.website}`);
      if (normalized.product) lines.push(`Product: ${normalized.product}`);
      if (normalized.address) lines.push(`Address: ${normalized.address}`);
      if (normalized.city) lines.push(`City: ${normalized.city}`);
      if (normalized.state) lines.push(`State/Region: ${normalized.state}`);
      if (normalized.zipCode) lines.push(`Zip Code: ${normalized.zipCode}`);
      if (normalized.country) lines.push(`Country: ${normalized.country}`);
      if (normalized.experience) lines.push(`Experience: ${normalized.experience}`);
      if (normalized.taxId) lines.push(`Tax ID: ${normalized.taxId}`);
      if (normalized.about) lines.push('', 'About:', normalized.about);
    } else {
      lines.push(
        `Name: ${normalized.firstName} ${normalized.lastName}`,
        `Email: ${normalized.email}`
      );
      if (normalized.subject) lines.push(`Subject: ${normalized.subject}`);
      lines.push('', 'Comment or Message:', normalized.message);
    }

    const textBody = lines.join('\n');

    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br/>');

    const htmlBody = lines.map((line) => `<p>${escapeHtml(line)}</p>`).join('');

    const mailOptions = {
      from,
      to,
      subject: safeSubject,
      replyTo: safeReplyTo,
      text: textBody,
      html: htmlBody,
    };

    await ensureSmtpReady();
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
