import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { sa200Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerFlex SA 200 | Siliconized Elastomeric Roof Coating',
  description:
    'EnerFlex SA 200 is a siliconized elastomeric roof coating with strong adhesion, fast drying, and long-term weather protection for multiple substrates.',
  path: '/enerflex-sa-200',
  keywords: ['EnerFlex SA 200', 'siliconized roof coating', 'elastomeric waterproof coating'],
});

const sa200JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerFlex SA 200",
  "description": "EnerFlex SA 200 is a siliconized elastomeric roof coating with strong adhesion, fast drying, and long-term weather protection for multiple substrates.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/sa200/product.webp",
  "url": "https://enercon-group.com/enerflex-sa-200",
  "category": "Elastomeric Roof Coating"
};

export default function SA200Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sa200JsonLd) }} />
      <PageHeader
        title="EnerFlex SA 200"
        subtitle="Siliconized"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/sa200/product.webp"
          imageAlt="EnerFlex SA 200"
        >
          <h4>Siliconized Elastomeric Roof Coating</h4>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Quick Drying</li>
            <li>No Primer Required</li>
            <li>10X Stronger Adhesion &amp; Weather Armor</li>
            <li>90% Solar Reflectivity with strong UV Resistance</li>
            <li>Ideal for metal, concrete, existing coatings, mobile homes and RV</li>
          </ul>
        </ProductHero>

        {/* Product Label */}
        <div className="product-label-container product-label-sa200">
          <Image src="/images/products/sa200/label.png" alt="EnerFlex SA 200 Label" width={800} height={300} className="image-full-auto" />
        </div>

        {/* Full-width Image */}
        <div className="product-full-image">
          <Image src="/images/products/sa200/fullimg.jpeg" alt="EnerFlex SA 200 Application" width={1200} height={500} className="image-full-contain-20" />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerFlex Siliconized SA 200 is a revolutionary, single-component siliconized elastomeric roof coating designed as high-performance roof coating, which offers flexibility &amp; durability against weather and solar reflective brilliance. Formulated with advanced silicone-modified acrylic technology, it offers exceptional elongation, 10X better water resistance and adhesion to a wide range of surfaces without requiring a primer in most cases.
          </p>
          <p>
            This premium coating delivers a thick, seamless barrier that does not crack, peel, or blister, even under the most severe weather conditions on any substrate, such as Concrete, Metal, PU Foam, or Bitumen Membranes.
          </p>
          <p>
            EnerFlex Siliconized SA 200 is quick drying, which substantially reduces the turnaround time. It forms a resilient and elastic monolithic membrane that caters roof movement and extreme weather, helping extend the life of your roof with minimal maintenance.
          </p>
        </div>

        {/* Graphics */}
        <div className="product-full-image">
          <Image src="/images/products/sa200/graphics.webp" alt="EnerFlex SA 200 Graphics" width={1200} height={600} className="image-full-cover-20" />
        </div>

        {/* Ease of Application */}
        <div className="product-main-container">
          <div className="ease-content">
            <div className="ease-text">
              <h3>Ease of Application</h3>
              <p>
                EnerFlex SA 200 is easy to apply using a roller or airless spray system. The coating can be applied without primer on most surfaces after standard surface preparation. Two coats are recommended for optimal protection, and polyester fabric mesh can be embedded between coats for reinforcement if needed.
              </p>
            </div>
            <div className="ease-image">
              <Image src="/images/products/sa200/roller-sprayer.webp" alt="Roller and Sprayer" width={300} height={250} className="ease-image-frame" />
            </div>
          </div>
        </div>

        {/* Second Graphics */}
        <div className="product-full-image">
          <Image src="/images/products/sa200/graphics2.webp" alt="EnerFlex SA 200 Infographic" width={1200} height={600} className="image-full-cover-20" />
        </div>

        <ProductLiterature docs={sa200Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
