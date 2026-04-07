import Image from 'next/image';
import './ProductLiterature.css';

interface Doc {
  previewSrc: string;
  alt: string;
  label: string;
  pdfUrl: string;
}

interface ProductLiteratureProps {
  docs: Doc[];
  heading?: string;
}

export default function ProductLiterature({ docs, heading = 'Product Literature' }: ProductLiteratureProps) {
  return (
    <section className="pl-section">
      <div className="container">
        <div className="pl-card">
          <h2 className="pl-heading">{heading}</h2>
          <div className="pl-grid">
            {docs.map((doc, i) => (
              <div key={i} className="pl-item">
                <Image
                  src={doc.previewSrc}
                  alt={doc.alt}
                  width={280}
                  height={200}
                  className="pl-preview-image"
                />
                <h3>{doc.label}</h3>
                <a
                  href={doc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-download-btn"
                >
                  {/* The pdf.png file should be placed in public/images/pdf.png */}
                  <Image
                    src="/images/pdf.webp"
                    alt="PDF icon"
                    width={18}
                    height={18}
                    className="pl-pdf-icon"
                  />
                  <span className="pl-download-text">Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
