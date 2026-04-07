# Enercon Group Website - Next.js

This is the Next.js version of the Enercon Group website, converted from WordPress while maintaining the exact design and structure.

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
enercon-nextjs/
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   ├── styles/           # Global styles and CSS modules
│   └── public/           # Static assets
```

## Features

- ✅ Exact design match with WordPress version
- ✅ Reusable Header and Footer components
- ✅ All pages converted (Home, About, Contact, Products, etc.)
- ✅ Contact forms functional
- ✅ Responsive design maintained
- ✅ SEO optimized

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- Next.js 15
- React 19
- TypeScript
- CSS Modules

## SMTP / Contact Form Configuration

The contact form sends emails via SMTP using Nodemailer.

1. Copy `.env.example` to `.env` (or `.env.local`).
2. Fill in your SMTP credentials:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - Optional: `SMTP_SECURE` (true for port 465) and `CONTACT_FORM_TO` / `SMTP_FROM`

The server reads the values from `process.env` when handling form submissions.
