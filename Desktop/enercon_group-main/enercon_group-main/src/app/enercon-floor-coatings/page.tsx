import Image from 'next/image';
import type { Metadata } from 'next';
import { FaShieldAlt, FaCheckCircle, FaFlask, FaPalette, FaBroom } from 'react-icons/fa';
import FloorSolutionItem from '@/components/FloorSolutionItem';
import ProductLiterature from '@/components/ProductLiterature';
import PageHeader from '@/components/PageHeader';
import { floorDocs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'Enercon Floor Coatings | Durable Industrial Flooring Systems',
  description:
    'Explore Enercon floor coating systems designed for durability, chemical resistance, and long-term performance in commercial and industrial spaces.',
  path: '/enercon-floor-coatings',
  keywords: ['floor coatings', 'industrial floor coating', 'epoxy alternatives'],
});

const floorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerFloor Floor Coatings",
  "description": "Explore Enercon floor coating systems designed for durability, chemical resistance, and long-term performance in commercial and industrial spaces.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "url": "https://enercon-group.com/enercon-floor-coatings",
  "category": "Industrial Floor Coating"
};

const floorSolutions = [
  {
    title: 'EnerFloor Polyaspartic',
    imageSrc: '/images/products/floor/fc-polyaspartic.webp',
    imageAlt: 'EnerFloor Polyaspartic',
    description:
      'A solvent-free, high-performance Polyaspartic floor coating, EnerFloor Polyaspartic delivers a seamless, self-leveling surface engineered for rapid curing and long-lasting durability. With exceptional abrasion, impact, and chemical resistance, along with UV-stable, non-yellowing performance, it is ideal for projects requiring fast turnaround and superior aesthetics. Designed for both full flooring systems and as a protective topcoat over decorative or epoxy floors, it offers a smart and efficient solution for environments demanding speed, strength, and reliable performance.',
    features: [
      'Solvent free',
      'High Strength',
      'Faster Curing - Quick Turnaround',
      'UV-Stable & Non-Yellowing Finish',
      'Excellent Abrasion & Impact Resistance',
    ],
  },
  {
    title: 'EnerFloor Epoxy SF-2K Primer',
    imageSrc: '/images/products/floor/fc-img-1.webp',
    imageAlt: 'EnerFloor Epoxy SF-2K Primer',
    description:
      'A heavy-duty Epoxy Primer and Sealer, this solvent-free base layer is perfect for preparing industrial-grade concrete floors. It offers strong adhesion and high chemical resistance, ensuring the longevity of your full flooring system.',
    features: [
      'Solvent free',
      'Essential primer for all epoxy systems',
      'Excellent spreading/sealing/adhesion promoter',
      'Ideal for new build and refurbish floors',
    ],
  },
  {
    title: 'EnerFloor Epoxy SF-2K',
    imageSrc: '/images/products/floor/fc-img-2.webp',
    imageAlt: 'EnerFloor Epoxy SF-2K',
    description:
      'A high-performance, solvent-free Epoxy Coating, this two-pack system delivers a smooth, chemical-resistant surface built to endure high-traffic environments. With its excellent penetrating properties, it ensures a strong bond and long-term reliability.',
    features: [
      'Solvent free',
      'Self-leveling',
      'Durable and long-lasting',
      'Moisture-resistant surface finish',
      'Superior abrasion and chemical resistance',
      'Suitable for industrial and commercial interiors',
      'Ideal for factories/loading bays/production floors',
    ],
  },
  {
    title: 'EnerFloor PU Enamel',
    imageSrc: '/images/products/floor/fc-img-3.webp',
    imageAlt: 'EnerFloor PU Enamel',
    description:
      'This two-pack, premium PU Enamel Top Coat forms a resilient, glossy barrier that offers both protection and aesthetics. Designed for areas exposed to alkalis, mild acids, or environmental wear, it combines toughness with decorative appeal.',
    features: [
      'High gloss decorative finish',
      'Protects against alkalis and mild acids',
      'Ideal for indoor and outdoor applications',
      'Excellent UV/weather/impact resistance',
    ],
  },
  {
    title: 'EnerFloor PU SF-2K',
    imageSrc: '/images/products/floor/fc-img-4.webp',
    imageAlt: 'EnerFloor PU SF-2K',
    description:
      'A solvent-free, high-performance polyurethane floor coating, EnerFloor PU SF-2K provides a seamless, self-leveling surface with exceptional chemical, abrasion, and load resistance. Ideal for areas requiring flexibility and long-term durability, it is a smart, cost-effective choice for industries demanding high performance under stress.',
    features: [
      'Solvent free',
      'Durable and self-leveling',
      'High flexibility and elongation',
      'Superior abrasion and impact resistance',
      'Excellent water and chemical resistance',
    ],
  },
];

export default function FloorCoatingsPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(floorJsonLd) }} />
      <PageHeader
        title="EnerFloor – Floor Coatings"
        subtitle="Performance You Can Stand On"
      />

      <div className="fc-container">
        {/* Top Section: Content Left, Image Right */}
        <div className="fc-main-content">
          <div className="fc-left-section">
            <div className="fc-why-choose-header">
              <h2>Smart Flooring for Smart Spaces</h2>
            </div>

            <div className="fc-description">
              Whether it&apos;s a high-traffic factory floor, a commercial showroom, or a chemical processing unit, floors take the brunt of daily operations. At ENERCON, we understand that an effective flooring system must not only withstand the demands of industrial and commercial use but also enhance safety, performance, and aesthetics.
            </div>
            <div className="fc-description">
              Our range of advanced floor coating products is engineered to deliver long-lasting performance in the harshest conditions. With resistance to chemicals, heavy loads, and weathering, Enercon&apos;s EnerFloor coatings are the ideal solution for transforming concrete substrates into clean, durable, and functional surfaces.
            </div>
          </div>

          <div className="fc-right-section">
            <Image
              src="/images/products/floor/hero2.webp"
              alt="Industrial Floor Coating"
              width={600}
              height={420}
              className="fc-image"
            />
          </div>
        </div>

        <div className="fc-why-choose-header fc-why-choose-center">
          <h2>Why Choose EnerFloor Industrial &amp; Commercial Floor Coatings?</h2>
        </div>

        {/* Bottom Section: Image Left, Content Right */}
        <div className="fc-bottom-content">
          <div className="fc-bottom-left">
            <Image
              src="/images/products/floor/hero1.webp"
              alt="Commercial Floor Coating"
              width={600}
              height={480}
              className="fc-image"
            />
          </div>

          <div className="fc-bottom-right">
            <div className="fc-benefits">
              <div className="fc-benefit-item">
                <div className="fc-benefit-icon">
                  <FaShieldAlt />
                </div>
                <div className="fc-benefit-content">
                  <h2>Durability &amp; Longevity</h2>
                  <p>Our coatings create seamless, hard-wearing floors that resist cracking, peeling, and wear caused by machinery, foot traffic, and chemicals.</p>
                </div>
              </div>

              <div className="fc-benefit-item">
                <div className="fc-benefit-icon">
                  <FaCheckCircle />
                </div>
                <div className="fc-benefit-content">
                  <h2>Safety &amp; Compliance</h2>
                  <p>Slip-resistant and easy-to-clean surfaces support hygiene and safety standards in sectors like healthcare, food processing, and manufacturing.</p>
                </div>
              </div>

              <div className="fc-benefit-item">
                <div className="fc-benefit-icon">
                  <FaFlask />
                </div>
                <div className="fc-benefit-content">
                  <h2>Chemical &amp; Abrasion Resistance</h2>
                  <p>Engineered for protection against oil, acid, alkali, and industrial chemicals ensuring your floors are ready for tough environments.</p>
                </div>
              </div>

              <div className="fc-benefit-item">
                <div className="fc-benefit-icon">
                  <FaPalette />
                </div>
                <div className="fc-benefit-content">
                  <h2>Aesthetic Appeal</h2>
                  <p>A variety of finishes and colors allow you to maintain visual consistency and brand standards across your facility.</p>
                </div>
              </div>

              <div className="fc-benefit-item">
                <div className="fc-benefit-icon">
                  <FaBroom />
                </div>
                <div className="fc-benefit-content">
                  <h2>Easy Maintenance</h2>
                  <p>Seamless finishes help reduce dust build-up and simplify cleaning, making them ideal for cleanrooms, pharma, and logistics hubs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications visual section */}
        <div className="fc-applications">
          <Image
            src="/images/products/floor/banner.webp"
            alt="EnerFloor Applications"
            width={1200}
            height={500}
            className="fc-applications-image"
          />
        </div>

        {/* Product Portfolio */}
        <div className="fc-solutions">
          <h3>Product Portfolio</h3>

          {floorSolutions.map((solution) => (
            <FloorSolutionItem
              key={solution.title}
              title={solution.title}
              imageSrc={solution.imageSrc}
              imageAlt={solution.imageAlt}
              description={solution.description}
              features={solution.features}
            />
          ))}
        </div>

        <ProductLiterature heading="Technical Data Sheets" docs={floorDocs} />
      </div>
    </div>
  );
}
