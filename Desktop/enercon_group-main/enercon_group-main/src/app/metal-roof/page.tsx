import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import '../products.css';
import DeferredCompletedProjects from '@/components/DeferredCompletedProjects';
import { buildMetadata } from '@/lib/seo';

const slides = [
  { src: '/images/restoration/metal/slide1.webp', caption: '' },
  { src: '/images/restoration/metal/slide2.webp', caption: 'LOGISTICS HUB WAREHOUSE\nTAMPA BAY' },
  { src: '/images/restoration/metal/slide3.webp', caption: 'COMMERCIAL CENTER\nMIAMI – USA' },
  { src: '/images/restoration/metal/slide4.webp', caption: 'METAL ROOF REFURBISHMENT\nDOWNTOWN DUBAI' },
  { src: '/images/restoration/metal/slide5.webp', caption: 'PALM ISLAND\nDUBAI' },
  { src: '/images/restoration/metal/slide6.webp', caption: 'DUBAI INTERNATIONAL AIRPORT\nDUBAI' },
  { src: '/images/restoration/metal/slide7.webp', caption: 'AL MORJAN\nABU DHABI' },
  { src: '/images/restoration/metal/slide8.webp', caption: 'LIJAN INSULATION WAREHOUSE\nDUBAI' },
  { src: '/images/restoration/metal/slide9.webp', caption: 'CAPITAL WAREHOUSE ROOF\nDUBAI' },
  { src: '/images/restoration/metal/slide10.webp', caption: 'METAL SHEDS (KSPANS)\nDUBAI' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Metal Roof Restoration | Leak, Heat and Corrosion Protection',
  description:
    'Protect and restore metal roofs with Enercon systems that seal laps, reduce heat gain, and improve long-term performance against corrosion and leaks.',
  path: '/metal-roof',
  keywords: ['metal roof restoration', 'metal roof waterproofing', 'silicone roof coating metal'],
});

const metalRoofJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Metal Roof Restoration",
  "description": "Protect and restore metal roofs with Enercon systems that seal laps, reduce heat gain, and improve long-term performance against corrosion and leaks.",
  "provider": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "serviceType": "Metal Roof Restoration",
  "url": "https://enercon-group.com/metal-roof",
  "areaServed": ["US", "AE"]
};

export default function MetalRoofPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metalRoofJsonLd) }} />
      <PageHeader
        title="Metal Roof Restoration"
        subtitle="Protection against Water leaks, Corrosion, and Heat"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <div className="restoration-hero">
          <div className="hero-text">
            <p>
              Metal roofs are known for their durability; however, prolonged environmental exposure can lead to issues such as corrosion, leaks, and thermal inefficiency. Our metal roof restoration solutions are designed to protect against these challenges, extending roof lifespan, enhancing heat reflectivity, and safeguarding your investment. Our expert-driven restoration process leverages advanced materials and technology to deliver superior performance and durability for industrial and commercial roofing systems.
            </p>
            <p>
              Metal roofs are known for their durability; however, prolonged environmental exposure can lead to issues such as corrosion, leaks, and thermal inefficiency. Factors like UV radiation, temperature increase, moisture infiltration, and chemical exposure accelerate deterioration, compromising structural integrity and energy efficiency. Our metal roof restoration solutions are designed to protect against these challenges, extending roof lifespan, enhancing heat reflectivity, and safeguarding your investment.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/images/restoration/metal/hero.png"
              alt="Sustainable Roof Restoration"
              width={600}
              height={420}
              className="restoration-hero-image-cover"
            />
          </div>
        </div>
<DeferredCompletedProjects slides={slides} />
        {/* Key Steps Section */}
        <div className="restoration-steps">
          <div className="steps-image">
            <Image
              src="/images/restoration/metal/steps.png"
              alt="Key Steps in Roof Restoration"
              width={600}
              height={500}
              className="restoration-steps-image"
            />
          </div>
          <div className="steps-text">
            <h3>Key Steps in Metal Roof Restoration</h3>
            <p><b>Step 1. Fastener Reinforcement:</b> Inspection, replacement, or tightening of all loose fasteners to ensure structural integrity and extended performance.</p>
            <p><b>Step 2. Seamless Lap Sealing:</b> Using ENERCON&apos;s high-performance EnerSeal Tape, all side and end laps are cleaned and sealed, creating a durable, waterproof barrier that prevents leaks.</p>
            <p><b>Step 3. Silicone Roof Coating Application:</b> A resilient silicone coating forms a weatherproof, UV-reflective layer that protects against harsh elements and reduces solar heat gain.</p>
            <p><b>Step 4. Corrosion Inhibition:</b> Corroded areas are treated with a specialized primer to inhibit rust progression and ensure long-lasting corrosion protection.</p>
          </div>
        </div>

        {/* Closing */}
        <div className="restoration-closing">
          <p>
            This comprehensive roof restoration approach ensures that your metal roof is well protected against water leaks, environmental stressors, and delivers lasting protection with peace of mind. With ENERCON metal roof restoration solutions, industrial, residential and commercial clients gain the highest standards in performance and durability.
          </p>
        </div>
      </div>

      
    </div>
  );
}
