import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { ap250Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerThane AP 250 | Aliphatic Polyurethane Roof Coating',
  description:
    'EnerThane AP 250 is a high-performance aliphatic polyurethane roof coating delivering UV stability, waterproofing, and cool-roof benefits.',
  path: '/enerthane-ap250',
  keywords: ['EnerThane AP 250', 'aliphatic polyurethane coating', 'roof waterproofing polyurethane'],
});

const ap250JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerThane AP 250",
  "description": "EnerThane AP 250 is a high-performance aliphatic polyurethane roof coating delivering UV stability, waterproofing, and cool-roof benefits.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/ap250/product.webp",
  "url": "https://enercon-group.com/enerthane-ap250",
  "category": "Polyurethane Roof Coating"
};

export default function AP250Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ap250JsonLd) }} />
      <PageHeader
        title="EnerThane AP 250"
        subtitle="Aliphatic Polyurethane"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/ap250/product.webp"
          imageAlt="EnerThane AP 250"
        >
          <h4>Liquid Applied PU Waterproofing &amp; Cool Roofing</h4>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Self-Priming</li>
            <li>Single-component</li>
            <li>100% Solids – Solvent Free</li>
            <li>High Solar Reflective – Cool Roofing</li>
            <li>Excellent UV &amp; Weather Resistance</li>
          </ul>
        </ProductHero>

        {/* Brand Logo Card */}
        <div className="product-label-container product-label-ap250">
          <Image src="/images/products/ap250/logo.webp" alt="EnerThane AP 250 Logo" width={400} height={200} className="image-full-cover-20" />
        </div>

        {/* Full-width Banner */}
        <div className="product-full-image">
          <Image src="/images/products/ap250/banner.webp" alt="EnerThane AP 250 Banner" width={1200} height={400} className="image-full-contain-20" />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerThane AP 250 is a high-performance, single-component aliphatic polyurethane waterproof coating; engineered for extreme weather conditions and designed for long-term durability. This advanced coating forms a seamless, flexible, and fully adhered membrane that provides outstanding resistance to UV, ponding water, and thermal stress.
          </p>
          <p>
            Formulated with 100% solids, EnerThane AP 250 offers a sustainable, low VOC solution for commercial and industrial roofing applications that demand both performance and environmental compliance. Its hydrophobic nature makes it ideal for roof protection against high humidity, intermittent rainfall, and prolonged sun exposure.
          </p>
          <p>
            Unlike conventional coatings, EnerThane AP 250 UV resistant chemistry ensures exceptional color stability, gloss retention and preventing chalking or degradation over time. It delivers superior crack-bridging and flexibility even at sub-zero temperatures. Its high solar reflectivity makes it an ideal &quot;cool roofing&quot; solution, reducing roof surface temperatures and lowering building energy cost.
          </p>
          <p>
            EnerThane AP 250 can be applied by brush, roller or airless spray on a wide variety of substrates. Once cured, it forms a monolithic waterproof barrier. EnerThane AP 250 can be applied in a single thick coat without formation of bubbles.
          </p>
        </div>

        {/* Graphics */}
        <div className="product-full-image">
          <Image src="/images/products/ap250/graphics.webp" alt="EnerThane AP 250 Graphics" width={1200} height={600} className="image-full-cover-20" />
        </div>

        <ProductLiterature docs={ap250Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
