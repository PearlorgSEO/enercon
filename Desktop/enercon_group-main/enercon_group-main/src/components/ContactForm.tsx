'use client';

import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wpforms-container wpforms-container-full wpforms-render-modern">
      <form onSubmit={handleSubmit} className="wpforms-validate wpforms-form">
        <div className="wpforms-field-container">
          {/* Name Field */}
          <div className="wpforms-field wpforms-field-name">
            <fieldset>
              <legend className="wpforms-field-label">
                Name <span className="wpforms-required-label">*</span>
              </legend>
              <div className="wpforms-field-row wpforms-field-medium">
                <div className="wpforms-field-row-block wpforms-first wpforms-one-half">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    title="First name"
                    placeholder="First name"
                    className={`wpforms-field-name-first ${errors.firstName ? 'wpforms-error' : ''}`}
                  />
                  {errors.firstName && <div className="wpforms-error-message">{errors.firstName}</div>}
                </div>
                <div className="wpforms-field-row-block wpforms-one-half">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    title="Last name"
                    placeholder="Last name"
                    className={`wpforms-field-name-last ${errors.lastName ? 'wpforms-error' : ''}`}
                  />
                  {errors.lastName && <div className="wpforms-error-message">{errors.lastName}</div>}
                </div>
              </div>
            </fieldset>
          </div>

          {/* Email Field */}
          <div className="wpforms-field wpforms-field-email">
            <label htmlFor="email" className="wpforms-field-label">
              Email <span className="wpforms-required-label">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              title="Email address"
              placeholder="Email address"
              className={`wpforms-field-medium ${errors.email ? 'wpforms-error' : ''}`}
            />
            {errors.email && <div className="wpforms-error-message">{errors.email}</div>}
          </div>

          {/* Subject Field */}
          <div className="wpforms-field wpforms-field-text">
            <label htmlFor="subject" className="wpforms-field-label">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              title="Subject"
              placeholder="Subject"
              className="wpforms-field-medium"
            />
          </div>

          {/* Message Field */}
          <div className="wpforms-field wpforms-field-textarea">
            <label htmlFor="message" className="wpforms-field-label">
              Comment or Message <span className="wpforms-required-label">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              title="Comment or message"
              placeholder="Comment or message"
              className={`wpforms-field-medium ${errors.message ? 'wpforms-error' : ''}`}
              rows={5}
            />
            {errors.message && <div className="wpforms-error-message">{errors.message}</div>}
          </div>
        </div>

        {/* Submit Status Messages */}
        {submitStatus === 'success' && (
          <div className="wpforms-submit-success">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="wpforms-submit-error">
            There was an error submitting your form. Please try again.
          </div>
        )}

        {/* Submit Button */}
        <div className="wpforms-submit-container">
          <button 
            type="submit" 
            className="wpforms-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
