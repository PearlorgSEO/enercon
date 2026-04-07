import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { buildMetadata } from '@/lib/seo';
import './contact.css';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Enercon Group | Waterproofing Experts',
  description:
    'Get in touch with Enercon Group for waterproofing, roof coating, and restoration product support. Offices in North America and Middle East.',
  path: '/contact',
  keywords: ['contact enercon', 'waterproofing support', 'roof coating supplier contact'],
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Enercon Group",
  "description": "Specialty chemicals and advanced waterproofing solutions for commercial and industrial buildings.",
  "url": "https://enercon-group.com",
  "logo": "https://enercon-group.com/images/common/enercondubai_logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <PageHeader
        title="Contact Us"
        subtitle="Our dedicated team is here to assist you"
      />

      <div className="container contact-content">
        <div className="row">
          <div className="col-md-12">
            <h2 className="contact-section-heading">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </div>

        <div className="row contact-offices-row">
          <div className="col-md-6">
            <div className="contact-info-section">
              <h3 className="contact-office-heading">
                North America Office
              </h3>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ct-contact-info-content">
                    Northdale Blvd, Tampa 33624, Florida USA
                  </div>
                </div>
              </div>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaPhone />
                  </div>
                  <div className="ct-contact-info-content">
                    <a href="tel:+17867260788">+1 786 726 0788</a>
                  </div>
                </div>
              </div>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="ct-contact-info-content">
                    <a href="mailto:info@enercon-group.com">info@enercon-group.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-info-section">
              <h3 className="contact-office-heading">
                Middle East Office
              </h3>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ct-contact-info-content">
                    Office 402, Building 2, EMAAR Business Park, UAE
                  </div>
                </div>
              </div>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaPhone />
                  </div>
                  <div className="ct-contact-info-content">
                    <a href="tel:+971501684435">+971 50 168 4435</a>
                  </div>
                </div>
              </div>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaPhone />
                  </div>
                  <div className="ct-contact-info-content">
                    <a href="tel:+97146658178">+971 4 665 8178</a>
                  </div>
                </div>
              </div>
              <div className="ct-contact-info">
                <div className="contact-info-inner">
                  <div className="ct-contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="ct-contact-info-content">
                    <a href="mailto:info@enercon-group.com">info@enercon-group.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row contact-maps-row">
          <div className="col-md-6">
            <div className="contact-map-wrapper">
              <h4 className="contact-map-heading">
                North America Office Location
              </h4>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.387504564412!2d-82.50630418493627!3d28.08673948261912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c56000000001%3A0x92e2234d5e3b78e5!2sNorthdale%20Blvd%2C%20Tampa%2C%20FL%2033624%2C%20USA!5e0!3m2!1sen!2s!4v1694176758305!5m2!1sen!2s" 
                width="100%" 
                height="220" 
                className="contact-map-iframe"
                title="North America Office Location - Northdale Blvd, Tampa, FL 33624, USA"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-map-wrapper">
              <h3 className="contact-map-heading">
                Middle East Office Location
              </h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28857.217224899692!2d55.170483885856146!3d25.084387953810394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43481c43e2ef%3A0x95b1e5b226899546!2sEMAAR%20Business%20Park!5e0!3m2!1sen!2sae!4v1694176381090!5m2!1sen!2sae" 
                width="100%" 
                height="220" 
                className="contact-map-iframe"
                title="Middle East Office Location - EMAAR Business Park, Dubai, UAE"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
