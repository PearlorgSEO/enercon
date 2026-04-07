import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <div className="product-contact-loading">Loading contact form...</div>,
});

export default function ProductContactSection() {
  return (
    <section className="product-contact">
      <h2>Contact Us</h2>
      <p>Feel free to contact us at any time. Our dedicated team at <strong>ENERCON</strong> is here to assist you with all your needs.</p>
      <ContactForm />
    </section>
  );
}