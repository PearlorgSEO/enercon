import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import HomeHeroSlider from '@/components/HomeHeroSlider';
import TrustedBy from '@/components/TrustedBy';
import { buildMetadata } from '@/lib/seo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://enercon-group.com';

export const metadata: Metadata = buildMetadata({
  title: 'Specialty Chemicals & Advanced Waterproofing Solutions USA | Enercon Group',
  description:
    'Enercon Group supplies advanced waterproofing, silicone roof coatings, sealants, and restoration systems for commercial and industrial projects in the USA and beyond.',
  path: '/',
  keywords: ['waterproofing solutions usa', 'silicone roof coating', 'roof restoration', 'enercon group'],
});

const slides = [
  {
    image: '/images/slider/enerseal_tape_banner.webp',
    alt: 'EnerSeal Tape Banner',
    link: '/enerseal-tape'
  },
  {
    image: '/images/slider/Banner-EnerFlex-SP-300.jpeg',
    alt: 'EnerFlex SP 300',
    link: '/enerflex-sp-300'
  },
  {
    image: '/images/slider/Banner-250-scaled.webp',
    alt: 'AP 250',
    link: '/enerthane-ap250'
  },
  {
    image: '/images/slider/Banner-EnerFloor.jpeg',
    alt: 'EnerFloor Coatings',
    link: '/enercon-floor-coatings'
  },
  {
    image: '/images/slider/Banner-EnerFlex-SB-100.jpeg',
    alt: 'EnerFlex SB 100',
    link: '/enerflex-sb-100'
  }
];

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Enercon Group',
    url: siteUrl,
    logo: `${siteUrl}/images/common/enercondubai_logo.webp`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-786-726-0788',
        contactType: 'customer service',
        areaServed: 'US',
      },
    ],
    sameAs: ['https://www.linkedin.com/company/enercongroup'],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Enercon Group',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeHeroSlider slides={slides} />

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="row services-row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-icon">
                  <Image 
                    src="/images/services/research.webp" 
                    alt="Research & Development"
                    width={64}
                    height={64}
                  />
                </div>
                <h4 className="service-title">
                  Research & Development
                </h4>
                <p className="service-text">
                  R&D driven ENERCON product range stand as a hallmark of lasting protection and manufacturing excellence
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-icon">
                  <Image 
                    src="/images/services/environmentalism.webp" 
                    alt="Eco-Friendly"
                    width={64}
                    height={64}
                  />
                </div>
                <h4 className="service-title">
                  Eco-Friendly
                </h4>
                <p className="service-text">
                  ENERCON waterproofing & energy solutions are designed in strict compliance to VOCs & environmental standards
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-icon">
                  <Image 
                    src="/images/services/dependable.webp" 
                    alt="Sustainability & Reliability"
                    width={64}
                    height={64}
                  />
                </div>
                <h4 className="service-title">
                  Sustainability & Reliability
                </h4>
                <p className="service-text">
                  Ensuring to offer top-quality and long-lasting waterproofing solutions that deliver unparalleled performance & reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ENERCON Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row about-enercon-row">
            <div className="col-md-6 about-enercon-text-col">
              <h3 className="about-main-title">
                About ENERCON Group
              </h3>
              <div className="about-copy-block">
                <p className="about-copy about-copy-gap">
                  ENERCON emerged with the foresight and passion of bridging technological gaps through unique and innovative products. Dedicatedly advancing industrial technologies, we, at ENERCON, are recognized as specialized solution provider. Specializing in waterproofing, energy and sustainability, we collaborate with clients, to design and supply solutions to cut carbon emissions, reduce costs, and optimize energy consumption.
                </p>
                <p className="about-copy">
                  ENERCON stands as premium supplier of liquid silicone and other waterproof coatings based out of USA with a regional presence across Europe and Middle East.
                </p>
              </div>
              <Link href="/about-us" className="about-read-more-btn" prefetch={false}>
                About ENERCON Group
              </Link>
            </div>
            <div className="col-md-6 about-enercon-image-col">
              <Image 
                src="/images/about/Home-img1.webp"
                alt="About ENERCON"
                width={640}
                height={528}
                className="about-image"
              />
            </div>
          </div>

          <div className="about-section-spacer"></div>

          <div className="row about-products-row">
            <div className="col-md-6">
              <Image 
                src="/images/about/image-2.webp"
                alt="About Our Products"
                width={640}
                height={403}
                className="about-image"
              />
            </div>
            <div className="col-md-6">
              <h3 className="about-main-title about-products-title">
                About Our Products
              </h3>
              <div className="about-copy-block">
                <p className="about-copy about-copy-gap">
                  We are committed to supplying innovative products to all our customers, advancing technology across industrial and commercial applications. ENERCON is a premier manufacturing force for reliable, high-performance waterproofing solutions. Our comprehensive product portfolio especially for roof maintenance and restoration ensures that all our customers demands and challenges are fully met.
                </p>
                <p className="about-copy">
                  ENERCON supplies products to meet the demands of homeowners, professional contractors and building owners. From repair, maintenance and construction of residential homes and commercial properties, to waterproofing solutions, sealants and industrial coatings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-overlay"></div>
        <div className="container testimonials-inner">
          <div className="testimonials-header">
            <h4 className="testimonials-subtitle">
              ENERCON Group
            </h4>
            <h3 className="testimonials-title">
              We are here to offer top Quality Products<br />
              with 15+ years experience
            </h3>
          </div>
          
          <div className="row testimonials-row">
            <div className="col-md-3 col-sm-6 testimonials-col">
              <div className="testimonial-card">
                <Image 
                  src="/images/testimonials/images.jpg"
                  alt="Nolan Anderson"
                  width={80}
                  height={80}
                  className="testimonial-avatar"
                />
                <p className="testimonial-text">
                  One stop shop for best in class weatherproofing, waterproofing and energy efficiency materials from around the world.
                </p>
                  <p className="testimonial-name">
                  Nolan Anderson
                  </p>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 testimonials-col">
              <div className="testimonial-card">
                <Image 
                  src="/images/testimonials/female-150x150.webp"
                  alt="Wesley Dorian"
                  width={80}
                  height={80}
                  className="testimonial-avatar"
                />
                <p className="testimonial-text">
                  Extremely professional company and with excellent products and solution. We had wonderful experience working with ENERCON and would highly recommend.
                </p>
                  <p className="testimonial-name">
                  Wesley Dorian
                  </p>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 testimonials-col">
              <div className="testimonial-card">
                <Image 
                  src="/images/testimonials/woman-150x150.webp"
                  alt="Aria Winslet"
                  width={80}
                  height={80}
                  className="testimonial-avatar"
                />
                <p className="testimonial-text">
                  ENERCON&apos;s waterproof coatings are reliable and effective for all applications.
                </p>
                  <p className="testimonial-name">
                  Aria Winslet
                  </p>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Flagship Products Section */}
      <section id="blog" className="products-section">
        <div className="container">
          <h3 className="products-main-title">
            ENERCON Group - Flagship Products
          </h3>
          
          <div className="products-grid-wrap">
            <Link href="/enerflex-sp-300" className="products-card-link" prefetch={false}>
              <div className="products-card">
                <Image 
                  src="/images/products/Liquid-silicone.webp"
                  alt="Liquid Silicone"
                  width={340}
                  height={200}
                  className="products-card-image"
                />
                <div className="products-card-body">
                  <h3 className="products-card-title">
                    Liquid Silicone
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/enerseal-tape" className="products-card-link" prefetch={false}>
              <div className="products-card">
                <Image 
                  src="/images/products/Enersealtape.webp"
                  alt="EnerSeal Tape"
                  width={340}
                  height={200}
                  className="products-card-image"
                />
                <div className="products-card-body">
                  <h3 className="products-card-title">
                    EnerSeal Tape
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/cool-roof-coatings" className="products-card-link" prefetch={false}>
              <div className="products-card">
                <Image 
                  src="/images/products/cool-roof-coating.webp"
                  alt="Cool Roof Coatings"
                  width={340}
                  height={200}
                  className="products-card-image"
                />
                <div className="products-card-body">
                  <h3 className="products-card-title">
                    Cool Roof Coatings
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row cta-row">
            <div className="col-md-6">
              <h3 className="cta-title">
                Feel free to contact us at any time.
              </h3>
            </div>
            <div className="col-md-6 cta-action-col">
              <Link href="/contact" className="cta-contact-btn" prefetch={false}>
                Contact US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
