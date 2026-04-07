'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import '../products.css';

const productOptions = [
  'EnerFlex SP 300 - High Solids Silicone',
  'EnerFlex SB 100 - Low Solids Silicone',
  'EnerFlex SA 200 - Siliconized Acrylic',
  'EnerFlex AP 250 - Acrylic Polyurethane',
  'EnerFlex AR 150 - PU',
  'EnerFloor Epoxy SF-2K Primer',
  'EnerFloor Epoxy SF-2K',
  'EnerFloor PU Enamel',
  'EnerFloor PU SF-2K',
  'EnerSeal Nano Seal Technology Tape',
  'EnerSil Sealants',
];

export default function BecomeApplicatorPage() {
  const [formData, setFormData] = useState({
    interestedIn: [] as string[],
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    product: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    experience: '',
    taxId: '',
    about: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter((v) => v !== value)
        : [...prev.interestedIn, value],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (formData.interestedIn.length === 0) newErrors.interestedIn = 'Please pick at least one option.';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.company.trim()) newErrors.company = 'Company is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required.';
    if (!formData.website.trim()) newErrors.website = 'Website is required.';
    if (!formData.product.trim()) newErrors.product = 'Please select a product.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state.trim()) newErrors.state = 'State / Region is required.';
    if (!formData.country.trim()) newErrors.country = 'Country is required.';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'applicator' }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error || 'Failed to submit application');
      }

      setSubmitStatus('success');
      setFormData({
        interestedIn: [],
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        product: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        experience: '',
        taxId: '',
        about: '',
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
      console.error('Application submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-content">
      <PageHeader
        title="Become Our Certified Applicator / Distributor"
      />

      {/* Why Partner Section */}
      <div className="applicator-hero">
        <div className="applicator-hero-inner">
          <h2>Why Partner with Enercon Group?</h2>
          <div className="applicator-benefits">
            <div className="applicator-benefit">
              <h3>High Quality Product</h3>
              <p>Innovative &amp; advanced waterproofing products for your projects.</p>
            </div>
            <div className="applicator-benefit">
              <h3>Technical Training &amp; Support</h3>
              <p>Gain in-depth product knowledge and application techniques.</p>
            </div>
            <div className="applicator-benefit">
              <h3>Business Growth Opportunities</h3>
              <p>Leverage our brand reputation to win more contracts.</p>
            </div>
            <div className="applicator-benefit">
              <h3>Recognition</h3>
              <p>Get featured as a certified applicator.</p>
            </div>
          </div>
          <p className="applicator-intro-text">
            Enercon Group invites skilled contractors to join our Certified Applicator Program—A pathway to expertise, credibility, and new business opportunities. Join our team of trusted professionals and elevate your expertise with Enercon Group.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="applicator-form-section">
        <h2>Become Our Partner</h2>
        <form className="applicator-form" onSubmit={handleSubmit}>
          {/* Interested In */}
          <div>
            <label>Interested in becoming *</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.interestedIn.includes('Applicator')}
                  onChange={() => handleCheckbox('Applicator')}
                />
                Applicator
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={formData.interestedIn.includes('Distributor')}
                  onChange={() => handleCheckbox('Distributor')}
                />
                Distributor
              </label>
            </div>
            {errors.interestedIn && <div className="field-error">{errors.interestedIn}</div>}
          </div>

          {/* Name */}
          <div className="form-row">
            <div>
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
                title="First name"
              />
              {errors.firstName && <div className="field-error">{errors.firstName}</div>}
            </div>
            <div>
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                title="Last name"
              />
              {errors.lastName && <div className="field-error">{errors.lastName}</div>}
            </div>
          </div>

          {/* Company & Email */}
          <div className="form-row">
            <div>
              <label>Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Company name"
                title="Company name"
              />
              {errors.company && <div className="field-error">{errors.company}</div>}
            </div>
            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                title="Email address"
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>
          </div>

          {/* Phone & Website */}
          <div className="form-row">
            <div>
              <label>Contact # *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone number"
                title="Contact number"
              />
              {errors.phone && <div className="field-error">{errors.phone}</div>}
            </div>
            <div>
              <label>Website *</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                placeholder="https://"
                title="Website URL"
              />
              {errors.website && <div className="field-error">{errors.website}</div>}
            </div>
          </div>

          {/* Product Interest */}
          <div>
            <label>Product interested in *</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              title="Product interested in"
            >
              <option value="">Select a product</option>
              {productOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {errors.product && <div className="field-error">{errors.product}</div>}
          </div>

          {/* Address */}
          <div>
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Address"
              title="Address"
            />
            {errors.address && <div className="field-error">{errors.address}</div>}
          </div>

          <div className="form-row">
            <div>
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
                title="City"
              />
              {errors.city && <div className="field-error">{errors.city}</div>}
            </div>
            <div>
              <label>State / Province / Region *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="State / Province / Region"
                title="State / Province / Region"
              />
              {errors.state && <div className="field-error">{errors.state}</div>}
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip code"
                title="Zip code"
              />
            </div>
            <div>
              <label>Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
                title="Country"
              />
              {errors.country && <div className="field-error">{errors.country}</div>}
            </div>
          </div>

          {/* Experience & Tax ID */}
          <div className="form-row">
            <div>
              <label>Industry working experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="No. of years"
                title="Industry working experience"
              />
            </div>
            <div>
              <label>Tax ID</label>
              <input
                type="text"
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                placeholder="Tax ID"
                title="Tax ID"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <label>Tell us about your business</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="100 word limit"
              title="Tell us about your business"
              maxLength={600}
            />
          </div>

          {/* Submit */}
          {submitStatus === 'success' && (
            <div className="submit-success">
              Thank you! Your application has been submitted. We&apos;ll be in touch soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="submit-error">
              There was a problem submitting your application. Please try again.
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Apply'}
          </button>
        </form>
      </div>
    </div>
  );
}
