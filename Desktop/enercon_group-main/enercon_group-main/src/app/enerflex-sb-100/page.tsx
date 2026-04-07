import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { sb100Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerFlex SB 100 | Low-Solids Silicone Roof Coating',
  description:
    'EnerFlex SB 100 is a low-solids liquid silicone roof coating designed for ponding-water resistance, strong adhesion, and reflective cool-roof performance.',
  path: '/enerflex-sb-100',
  keywords: ['EnerFlex SB 100', 'low solids silicone', 'roof waterproof coating'],
});

const sb100JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerFlex SB 100",
  "description": "EnerFlex SB 100 is a low-solids liquid silicone roof coating designed for ponding-water resistance, strong adhesion, and reflective cool-roof performance.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/sb100/product.webp",
  "url": "https://enercon-group.com/enerflex-sb-100",
  "category": "Silicone Roof Coating"
};

export default function SB100Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sb100JsonLd) }} />
      <PageHeader
        title="EnerFlex SB 100"
        subtitle="Low-Solids Silicone"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/sb100/product.webp"
          imageAlt="EnerFlex SB 100"
        >
          <h4>Liquid Silicone Roof Coating with Reflective Brilliance</h4>
          <h5>Advance Formulation</h5>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Superior Ponding Water Resistance</li>
            <li>Cool Roof Technology reflects up to 90% of sunlight</li>
            <li>Easy Application &amp; Quick Drying reduces downtime</li>
            <li>Universal Adhesion: Strongest bonding with a wide range of substrates</li>
            <li>High Elasticity and Crack Bridging</li>
          </ul>
        </ProductHero>

        {/* Banner Label */}
        <div className="product-label-container product-label-sb100">
          <Image src="/images/products/sb100/banner.png" alt="EnerFlex SB 100 Banner" width={800} height={150} className="image-full-auto" />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerFlex SB 100 is a low-solids, single-component liquid silicone roof coating, designed to deliver superior waterproofing. Once applied, it forms a seamless, elastomeric membrane that strongly adheres to the roof surface, providing robust protection against harsh weather and UV exposure. Exceptional elongation makes EnerFlex SB 100 an ideal product for roofs that undergo thermal cycling, preventing cracks and leaks over time. Its unique formulation withstands ponding water, ensuring long-lasting waterproofing in even the most challenging environments.
          </p>
        </div>

        {/* Full-width Image */}
        <div className="product-full-image">
          <Image src="/images/products/sb100/application.jpeg" alt="EnerFlex SB 100 Application" width={1200} height={600} className="image-full-cover-20" />
        </div>

        <ProductLiterature docs={sb100Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
