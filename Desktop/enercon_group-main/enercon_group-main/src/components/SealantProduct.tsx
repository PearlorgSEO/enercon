import Image from 'next/image';

interface DownloadDoc {
  label: string;
  previewSrc: string;
  href: string;
}

interface SealantProductProps {
  mockupSrc: string;
  mockupAlt: string;
  title: string;
  features: string[];
  colors: string;
  packaging: string;
  shelfLife: string;
  docs: DownloadDoc[];
}

export default function SealantProduct({
  mockupSrc,
  mockupAlt,
  title,
  features,
  colors,
  packaging,
  shelfLife,
  docs,
}: SealantProductProps) {
  return (
    <div className="sealant-product">
      {/* Left: mockup image + download cards */}
      <div className="sealant-left">
        <div className="sealant-mockup-wrapper">
          <Image
            className="sealant-mockup"
            src={mockupSrc}
            alt={mockupAlt}
            width={520}
            height={200}
          />
        </div>
        <div className="sealant-downloads">
          {docs.map((doc) => (
            <div
              key={doc.label}
              className="responsive-card1 sealant-doc-card"
            >
              <Image
                src={doc.previewSrc}
                alt={doc.label}
                width={280}
                height={160}
                className="sealant-doc-preview"
              />
              <h2 className="sealant-doc-label">{doc.label}</h2>
              <a href={doc.href} target="_blank" rel="noopener noreferrer" className="download-btn">
                📄 Download
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right: title, features, product info */}
      <div className="sealant-right">
        <h3>{title}</h3>
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="sealant-info">
          <p><strong>Colors</strong></p>
          <p>{colors}</p>
          <p><strong>Packaging</strong></p>
          <p>{packaging}</p>
          <p><strong>Shelf Life</strong></p>
          <p>{shelfLife}</p>
        </div>
      </div>
    </div>
  );
}
