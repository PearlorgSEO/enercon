import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import '../products.css';
import DeferredCompletedProjects from '@/components/DeferredCompletedProjects';
import { buildMetadata } from '@/lib/seo';

const slides = [
  { src: '/images/restoration/concrete/slide1.webp', caption: '' },
  { src: '/images/restoration/concrete/slide2.webp', caption: 'DATA CENTER ROOF\nPUERTO RICO' },
  { src: '/images/restoration/concrete/slide3.webp', caption: 'ROOF RESTORATION\nJAMAICA' },
  { src: '/images/restoration/concrete/slide4.webp', caption: 'COMMUNITY SCHOOL\nGEORGIA' },
  { src: '/images/restoration/concrete/slide5.webp', caption: 'DEIRA CITY CENTER\nDUBAI' },
  { src: '/images/restoration/concrete/slide6.webp', caption: 'UAE SPACE AGENCY\nABU DHABI' },
  { src: '/images/restoration/concrete/slide7.webp', caption: 'ABU DHABI MUNICIPALITY\nAL BATEEN' },
  { src: '/images/restoration/concrete/slide8.webp', caption: 'ADNOC CONTROL BUILDING\nABU DHABI' },
  { src: '/images/restoration/concrete/slide9.webp', caption: 'AL MAJD SCHOOL\nABU DHABI' },
  { src: '/images/restoration/concrete/slide10.webp', caption: 'EMIRATES HILLS VILLA\nDUBAI' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Concrete Roof Restoration | Durable Waterproofing Systems',
  description:
    'Extend concrete roof life with Enercon restoration coatings and sealants engineered for crack-bridging, waterproofing, and thermal performance.',
  path: '/concrete-roof',
  keywords: ['concrete roof restoration', 'concrete roof waterproofing', 'roof coating concrete'],
});

const concreteRoofJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Concrete Roof Restoration",
  "description": "Extend concrete roof life with Enercon restoration coatings and sealants engineered for crack-bridging, waterproofing, and thermal performance.",
  "provider": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "serviceType": "Concrete Roof Restoration",
  "url": "https://enercon-group.com/concrete-roof",
  "areaServed": ["US", "AE"]
};

export default function ConcreteRoofPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(concreteRoofJsonLd) }} />
      <PageHeader
        title="Concrete Roof Restoration"
        subtitle="Fortify Your Concrete Roof"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <div className="restoration-hero">
          <div className="hero-text">
            <p>
              Engineered for durability, waterproofing, and thermal efficiency, concrete roofs are known for their resilience, but continuous exposure to environmental challenges such as UV radiation, temperature fluctuations, and moisture infiltration can lead to gradual wear and structural vulnerability. Over time, these factors contribute to cracks, surface degradation, and decreased insulation efficiency, which can compromise the overall performance of the building.
            </p>
            <p>
              Our concrete roof restoration coatings are designed to extend the life of your roof, enhancing durability, waterproofing, and energy efficiency. By utilizing advanced coatings and sealants, our products provide a seamless protective layer that safeguards against water penetration, prevents structural deterioration, and improves thermal reflectivity, ensuring long-term reliability.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/images/restoration/concrete/hero.webp"
              alt="Sustainable Roof Restoration"
              width={600}
              height={420}
              className="restoration-hero-image-cover"
            />
          </div>
        </div>

        {/* Key Steps Section */}
        <div className="restoration-steps">
          <div className="steps-image">
            <Image
              src="/images/restoration/concrete/steps.webp"
              alt="Key Steps in Roof Restoration"
              width={600}
              height={500}
              className="restoration-steps-image"
            />
          </div>
          <div className="steps-text">
            <h3>Key Steps in the Concrete Roof Restoration</h3>
            <p><b>Step 1. Detailed Roof Inspection:</b> Using specialized ENERCON materials engineered for concrete repair and waterproofing, the process begins with a comprehensive inspection to identify cracks, structural issues, and areas of water ingress. Using specialized ENERCON&apos;s materials engineered for concrete repair and waterproofing, you can address each issue to restore roof integrity.</p>
            <p><b>Step 2. Silicone Roof Coating Application:</b> Apply a seamless, high-performance ENERCON silicone coating, forming a durable waterproof barrier that resists environmental wear. This reflective coating not only extends the roof&apos;s lifespan but also improves thermal efficiency by reducing heat absorption, creating a cooler roof surface.</p>
          </div>
        </div>

        {/* Closing */}
        <div className="restoration-closing">
          <p>
            Through this rigorous roof restoration process, your concrete roof is fortified to withstand environmental challenges, ensuring long-lasting protection and energy savings.
          </p>
        </div>
      </div>

      <DeferredCompletedProjects slides={slides} />
    </div>
  );
}
