import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'Roof Restoration Solutions | Enercon Group',
  description:
    'Restore aging roofs with Enercon systems for waterproofing, weather resistance, and energy efficiency across metal, concrete, and BUR surfaces.',
  path: '/roof-restoration',
  keywords: ['roof restoration', 'commercial roof restoration', 'roof waterproofing systems'],
});

const roofRestorationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Restoration",
  "description": "Restore aging roofs with Enercon systems for waterproofing, weather resistance, and energy efficiency across metal, concrete, and BUR surfaces.",
  "provider": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "serviceType": "Roof Restoration",
  "url": "https://enercon-group.com/roof-restoration",
  "areaServed": ["US", "AE"]
};

export default function RoofRestorationPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofRestorationJsonLd) }} />
      <PageHeader
        title="Roof Restoration"
        subtitle="Restore Instead of Replace"
      />

      <div className="container page-container">
        {/* Intro */}
        <h3 className="section-heading-22-spaced">
          Enercon Offers Advanced Roof Restoration Solutions For Long Lasting Performance
        </h3>

        <div className="restoration-hero">
          <div className="hero-text">
            <h2 className="section-title">About Roof Restoration</h2>
            <p>
              ENERCON&apos;s roof restoration solutions provide a long-lasting, cost-effective alternative to full roof replacement, delivering extended performance and protection for commercial and industrial roofs. With our industry expertise and commitment to innovation, roof restoration products are designed with optimal durability, energy efficiency, and resilience against environmental stressors—all while minimizing operational disruption.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/images/restoration/metal/hero.png"
              alt="Metal Roof Restoration"
              width={600}
              height={420}
              className="restoration-hero-image-contain"
            />
          </div>
        </div>

        {/* Full Image */}
        <div className="product-full-image block-top-30">
          <Image
            src="/images/restoration/bur/hero.webp"
            alt="Roof Coating Application"
            width={1200}
            height={500}
            className="image-full-cover-20"
          />
        </div>

        {/* Core Advantages */}
        <h2 className="section-heading-26">Core Advantages of Roof Restoration</h2>
        <div className="crc-circle-row">
          <div className="crc-circle-box">
            <h3>Enhanced Waterproofing &amp; Weather Resistance</h3>
            <p>Advanced membranes and protective coatings shield against leaks, UV damage, and severe weather.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Boosted Energy Efficiency</h3>
            <p>Reflective coatings help reduce internal building temperatures, lowering cooling costs.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Long Roof Life</h3>
            <p>Reinforced sealants and coatings extend roof life, protecting against wear and tear.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Sustainable &amp; Environmentally Responsible</h3>
            <p>Minimizes waste and offers long-term maintenance and protection.</p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="product-description block-top-30">
          <h2 className="section-title">Why Choose ENERCON&apos;s Roof Restoration?</h2>
          <ol>
            <li><strong>Enhanced Weather Resistance:</strong> Superior waterproofing protects against leaks, UV damage, and extreme weather.</li>
            <li><strong>Optimized Energy Savings:</strong> Reflective coatings reduce heat absorption, promoting energy efficiency.</li>
            <li><strong>Sustainability at Its Core:</strong> ENERCON products minimize material waste and support green building standards.</li>
          </ol>
        </div>

        {/* Full Image */}
        <div className="product-full-image block-top-30">
          <Image
            src="/images/restoration/concrete/hero.webp"
            alt="Sustainable Roof Restoration"
            width={1200}
            height={500}
            className="image-full-cover-20"
          />
        </div>

        {/* Explore Solutions */}
        <h2 className="section-heading-26">Explore Our Restoration Solutions</h2>
        <div className="crc-product-cards">
          <Link href="/metal-roof" className="crc-product-card">
            <Image
              src="/images/restoration/metal/hero.png"
              alt="Metal Roof Restoration"
              width={300}
              height={250}
              className="image-card-cover-250"
            />
            <h3>Metal</h3>
            <p>Durable metal restoration solutions for lasting protection.</p>
          </Link>
          <Link href="/concrete-roof" className="crc-product-card">
            <Image
              src="/images/restoration/concrete/hero.webp"
              alt="Concrete Roof Restoration"
              width={300}
              height={250}
              className="image-card-cover-250"
            />
            <h3>Concrete</h3>
            <p>Reliable concrete roof restoration for ultimate durability.</p>
          </Link>
          <Link href="/bur" className="crc-product-card">
            <Image
              src="/images/restoration/bur/hero.webp"
              alt="BUR Roof Restoration"
              width={300}
              height={250}
              className="image-card-cover-250"
            />
            <h3>BUR</h3>
            <p>Effective BUR restoration for superior performance.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
