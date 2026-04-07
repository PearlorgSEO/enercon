import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { ar150Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerThane AR 150 | Aromatic PU Roof Waterproof Coating',
  description:
    'EnerThane AR 150 is a liquid-applied aromatic PU roof coating engineered for seamless waterproofing, elasticity, and long-term roof restoration systems.',
  path: '/enerthane-ar150',
  keywords: ['EnerThane AR 150', 'aromatic polyurethane roof coating', 'PU waterproof membrane'],
});

const ar150JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerThane AR 150",
  "description": "EnerThane AR 150 is a liquid-applied aromatic PU roof coating engineered for seamless waterproofing, elasticity, and long-term roof restoration systems.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/ar150/product.webp",
  "url": "https://enercon-group.com/enerthane-ar150",
  "category": "Polyurethane Roof Coating"
};

export default function AR150Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ar150JsonLd) }} />
      <PageHeader
        title="EnerThane AR 150"
        subtitle="High-Performance Polyurethane Roof Coating"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/ar150/product.webp"
          imageAlt="EnerThane AR 150"
        >
          <h4>Liquid-Applied PU-Based Roof Coating</h4>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Single-component</li>
            <li>Excellent adhesion</li>
            <li>Ponding Water Resistance</li>
            <li>Easy roller, brush or spray application</li>
            <li>Highly elastic and monolithic membrane</li>
          </ul>
        </ProductHero>

        {/* Full-width Image 1 */}
        <div className="product-full-image">
          <Image
            src="/images/products/ar150/banner1.webp"
            alt="EnerThane AR 150 Application"
            width={1200}
            height={500}
            className="image-full-cover-20"
          />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerThane AR 150 is designed as a roof waterproof coating and is suitable for both new construction and restoration projects. It is engineered using aromatic PU technology for high-performance and long-term waterproofing protection under challenging climate conditions.
          </p>
          <p>
            This liquid-applied coating cures to form a seamless, fully adhered elastomeric membrane that eliminates joints, seams and penetrations typically associated with sheet-applied roofing products. Its high elasticity and crack-bridging capability allow the coating to accommodate thermal movement, minor substrate cracking and roof vibrations without losing adhesion or waterproof integrity.
          </p>
          <p>
            With excellent resistance to ponding water, UV exposure (when top-coated) and temperature extremes, EnerThane AR 150 is ideal to prolong the service life of existing roofs, reducing lifecycle costs and deferring full roof replacement. It can be used as a stand-alone waterproofing membrane or as part of a complete roof restoration system over a wide range of substrates, when AP 250 is applied as top coat.
          </p>
        </div>

        {/* Full-width Image 2 */}
        <div className="product-full-image">
          <Image
            src="/images/products/ar150/banner2.webp"
            alt="EnerThane AR 150 Roof System"
            width={1200}
            height={500}
            className="image-full-cover-20"
          />
        </div>

        <ProductLiterature docs={ar150Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
