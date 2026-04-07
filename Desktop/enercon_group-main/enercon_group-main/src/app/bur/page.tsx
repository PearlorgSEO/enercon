import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import '../products.css';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'BUR Roof Restoration | Built-Up Roofing Protection',
  description:
    'Restore built-up roofing and modified bitumen systems with Enercon solutions designed to improve waterproofing, UV resistance, and roof lifespan.',
  path: '/bur',
  keywords: ['bur roof restoration', 'built up roof waterproofing', 'bitumen roof coating'],
});

const burJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "BUR Roof Restoration",
  "description": "Restore built-up roofing and modified bitumen systems with Enercon solutions designed to improve waterproofing, UV resistance, and roof lifespan.",
  "provider": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "serviceType": "BUR Roof Restoration",
  "url": "https://enercon-group.com/bur",
  "areaServed": ["US", "AE"]
};

export default function BURRoofPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(burJsonLd) }} />
      <PageHeader
        title="BUR Roof Restoration"
        subtitle="Extend the life of your existing Built-up Roof"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <div className="restoration-hero">
          <div className="hero-text">
            <p>
              Long-lasting waterproofing and durability—built-up roofing (BUR) systems, torch-applied, and modified bitumen membranes are renowned for their strength and protective qualities. However, even these robust surfaces benefit from periodic restoration to maintain peak performance and prevent water infiltration. Over time, exposure to UV radiation, temperature fluctuations, and environmental contaminants can cause surface deterioration, leading to cracks, seam separation, and reduced waterproofing effectiveness.
            </p>
            <p>
              Our BUR roof restoration process is crafted to fortify these roofing systems, enhancing durability, waterproofing, and energy efficiency. Through the application of advanced protective Enercon coatings and sealants, we create a seamless barrier that resists moisture intrusion, mitigates thermal stress, and extends the service life of the roof.
            </p>
          </div>
          <div className="hero-image">
            <div className="bur-hero-image-mobile-round">
              <Image
                src="/images/restoration/bur/hero.webp"
                alt="BUR Roof Restoration"
                width={600}
                height={420}
                className="restoration-hero-image-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Steps Section */}
        <div className="restoration-steps">
          <div className="steps-image">
            <Image
              src="/images/restoration/bur/steps.webp"
              alt="Roof Restoration Steps"
              width={600}
              height={500}
              className="restoration-steps-image"
            />
          </div>
          <div className="steps-text">
            <h3>Key Steps in BUR Roof Restoration</h3>
            <p><b>Step 1. Thorough Surface Cleaning and Preparation:</b> Begin with a comprehensive pressure wash of the bitumen surface to eliminate dirt, debris, and contaminants, providing a clean base for restoration and maximizing the effectiveness of our coatings.</p>
            <p><b>Step 2. Targeted Repairs and Reinforcement:</b> Vulnerable areas, including cracks, corners, penetrations, and ponding zones, are identified and treated with EnerSeal Tape or EnerSeal Sealant. This step reinforces waterproofing and flexibility at critical points to ensure long-lasting protection.</p>
            <p><b>Step 3. Primer Application:</b> A high-quality primer is applied to the bitumen membrane, acting as a bleed-block to prevent bitumen migration and improve coating adhesion, creating an ideal surface for sealing.</p>
            <p><b>Step 4. Silicone Roof Coating:</b> Finally, we apply ENERCON&apos;s liquid silicone roof coating across the entire roof, forming a resilient, waterproof, and UV-resistant barrier that protects against leaks, weather damage, and thermal issues.</p>
          </div>
        </div>

        {/* Closing */}
        <div className="restoration-closing">
          <p>
            This comprehensive restoration approach rejuvenates your BUR roof, extending its life and enhancing energy efficiency, durability, and resistance to environmental challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
