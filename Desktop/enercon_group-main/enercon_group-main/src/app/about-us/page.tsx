import Image from 'next/image';
import type { Metadata } from 'next';
import './about.css';
import TrustedBy from '@/components/TrustedBy';
import PageHeader from '@/components/PageHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Enercon Group | Waterproofing & Specialty Chemicals',
  description:
    'Learn about Enercon Group, our global presence, technical expertise, and mission to deliver high-performance waterproofing and specialty chemical solutions.',
  path: '/about-us',
  keywords: ['about enercon group', 'waterproofing company usa', 'specialty chemicals'],
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Enercon Group",
  "description": "Learn about Enercon Group, our global presence, technical expertise, and mission to deliver high-performance waterproofing and specialty chemical solutions.",
  "url": "https://enercon-group.com/about-us",
  "about": {
    "@type": "Organization",
    "name": "Enercon Group",
    "url": "https://enercon-group.com",
    "areaServed": ["US", "AE", "Latin America", "Australia"]
  }
};

export default function AboutPage() {
  return (
    <div className="page-content about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <PageHeader
        title="About Us"
        subtitle="WE SUPPLY SPECIALTY CHEMICALS &amp; ADVANCED WATERPROOFING SOLUTIONS"
      />

      <div className="container content-container">
        <div className="aboutText">
          <div className="about-flex">
            <div className="about-text">
              <p>
                ENERCON operates with a global mindset. We are strategically positioned to serve all our
                key markets efficiently and effectively. Our North American office located in Tampa, FL and
                Middle Eastern office in Dubai, UAE provides us flexibility and global outreach to meet the
                dynamic demands of our customers from America, Latin America, Middle East and Australia.
              </p>
              <p>
                Our global outreach is further strengthened by our strategically located warehouses across
                Miami, FL and Dubai, UAE. It enables our supply chain team to deliver products in a cost
                effective and timely manner to all our customers across the globe.
              </p>
            </div>
            <div className="about-image-card about-image-card-1">
              <Image
                src="/images/about/Commercial-Building.webp"
                alt="Warehouse"
                width={600}
                height={400}
              />
            </div>
          </div>
          <p className="about-paragraph">
            With strong global presence, we strive to stay at the forefront of industry trends, delivering
            fast and reliable solutions to the clients worldwide. Whether in the arid climatic conditions of
            the GCC or the diverse climates of America, ENERCON is your trusted partner in high-performance
            waterproofing and specialty chemicals.
          </p>
        </div>

        <div className="aboutText1">
          <div className="about-flex">
            <div className="about-text">
              <h2>Why We Exist</h2>
              <p>
                ENERCON Group was formed with the foresightedness and passion to bridge the technological
                gap; bringing unique and innovative technologies to the offering of our local customers. We
                are dedicatedly influencing the way, world is built. We are dedicatedly bringing
                high-performance products at the doorstep of the local market, with continued pursuit of
                advancement in industrial technologies.
              </p>
              <p>
                Our services and expertise do not stop with the product, we continuously strive to add value
                to the effectiveness of the project in its entirety. We take on a consultative approach, as a
                solution provider for the problems requiring unique and innovative coating solutions. We
                specifically engineer our product offerings and services to add value to our customers, and
                to the society at large.
              </p>
            </div>
            <div className="about-image-card about-image-card-2 about-image-contain">
              <Image
                src="/images/about/about-img1.webp"
                alt="About Enercon"
                width={560}
                height={480}
              />
            </div>
          </div>
        </div>

        <div className="aboutText2">
          <div className="about-flex">
            <div className="about-image-card about-image-card-3">
              <Image
                src="/images/about/about-achieve.jpeg"
                alt="Roof restoration"
                width={560}
                height={420}
              />
            </div>
            <div className="about-text">
              <h2>What We Want to Achieve</h2>
              <p>
                High standards, extensive know-how, ardour for innovation and determination for continuous
                improvement drive the philosophy of ENERCON Group.
              </p>
              <p>
                At the heart of our company is the aspiration to combine strong talent with grit, and
                creatively build a profitable and impactful business, that creates immense value to our
                customers and to our planet. Combining strong technical expertise with business acumen to
                provide innovative and sustainable solutions, tailored to the needs of a wide range of
                commercial and industrial customers.
              </p>
            </div>
          </div>
        </div>

        <div className="about-values-section">
          <h2>What Are Our Values</h2>
          <div className="about-values-wrapper">
            <div className="about-value-circle">RESPECT</div>
            <div className="about-value-circle">CUSTOMER SUCCESS</div>
            <div className="about-value-circle">TRANSPARENCY</div>
          </div>
        </div>

        <TrustedBy />
      </div>
    </div>
  );
}
