import Image from 'next/image';
import type { Metadata } from 'next';
import ProductLiterature from '@/components/ProductLiterature';
import ProductContactSection from '@/components/ProductContactSection';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import { sp300Docs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'EnerFlex SP 300 | 100% Silicone Roof Coating',
  description:
    'EnerFlex SP 300 is a premium high-solids silicone roof coating for waterproofing, UV protection, and cool roof performance in demanding climates.',
  path: '/enerflex-sp-300',
  keywords: ['EnerFlex SP 300', 'silicone roof coating', 'high solids silicone'],
});

const sp300JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerFlex SP 300",
  "description": "EnerFlex SP 300 is a premium high-solids silicone roof coating for waterproofing, UV protection, and cool roof performance in demanding climates.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/sp300/product.webp",
  "url": "https://enercon-group.com/enerflex-sp-300",
  "category": "Silicone Roof Coating"
};

export default function SP300Page() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sp300JsonLd) }} />
      <PageHeader
        title="EnerFlex SP 300"
        subtitle="High-Solids Silicone"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/sp300/product.webp"
          imageAlt="EnerFlex SP 300"
        >
          <h4>100% Silicone White Roof Coating</h4>
          <h5>Premium Formulation</h5>
          <p className="key-features-label">Key Features:</p>
          <ul>
            <li>Quick drying</li>
            <li>Ponding water resistant</li>
            <li>Extremely easy application</li>
            <li>Cool Roofing – Lowers utility bills</li>
            <li>Long lasting protection even with single coat</li>
            <li>Highest possible adhesion with almost all types of substrates</li>
          </ul>
        </ProductHero>

        {/* Banner Label */}
        <div className="product-label-container product-label-sp300">
          <Image src="/images/products/sp300/banner.webp" alt="EnerFlex SP 300 Banner" width={800} height={200} className="image-full-auto" />
        </div>

        {/* Full-width Image */}
        <div className="product-full-image">
          <Image src="/images/products/sp300/cp9.jpg" alt="EnerFlex SP 300 Application" width={1200} height={500} className="image-full-contain-20" />
        </div>

        {/* Description */}
        <div className="product-description">
          <p>
            EnerFlex SP 300 – 100% Silicone is a moisture cured, liquid applied coating, especially designed to offer both waterproofing and cool roofing. Once applied it forms a monolithic, elastomeric membrane that prevents water penetration even in ponding water. In addition, EnerFlex SP 300 also provides long lasting and most effective cool roofing by reflecting sunlight, making it an energy-efficient solution that can reduce indoor temperatures. EnerFlex SP 300 is extremely easy to apply with a brush, roller, or spray gun, providing flexibility for various application methods. Plus, its an environment friendly formulation, which is free from harmful VOCs, meeting modern environmental standards.
          </p>
          <p>
            EnerFlex SP 300 is a premium formulation, 100% silicone, fluid-applied, moisture-cure coating designed to provide excellent waterproofing, even against ponding water. It reflects incident sunlight, making it a top-of-the-line cool roof and UV-resistant coating. Its premium formulation makes it suitable for use in all types of climatic conditions. The 100% silicone chemistry is especially well-suited for extreme tropical environments, exposed to some of the hottest and wettest weather with intense UV exposure. The premium formulation enables it to maintain the highest possible solar reflectivity even after it ages and ensures excellent adhesion with almost all types of substrates.
          </p>
        </div>

        {/* Mockup Image */}
        <div className="product-full-image">
          <Image src="/images/products/sp300/mockup.webp" alt="EnerFlex SP 300 Mockup" width={1200} height={600} className="image-full-cover-20" />
        </div>

        <ProductLiterature docs={sp300Docs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
