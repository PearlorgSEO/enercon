import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'Cool Roof Coatings | Energy-Efficient Roof Protection',
  description:
    'Discover Enercon cool roof coating solutions that improve solar reflectivity, reduce cooling load, and extend roof life for commercial and industrial buildings.',
  path: '/cool-roof-coatings',
  keywords: ['cool roof coating', 'energy efficient roofing', 'solar reflective coating'],
});

const coolRoofJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cool Roof Coatings",
  "description": "Enercon cool roof coating solutions that improve solar reflectivity, reduce cooling load, and extend roof life for commercial and industrial buildings.",
  "provider": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "serviceType": "Cool Roof Coating",
  "url": "https://enercon-group.com/cool-roof-coatings",
  "areaServed": ["US", "AE"]
};

export default function CoolRoofPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coolRoofJsonLd) }} />
      <PageHeader
        title="Cool Roof Coating"
        subtitle="Sustainable Heat Barrier"
      />

      <div className="container page-container">
        {/* Intro */}
        <div className="product-description">
          <p>
            Cool roof coatings are revolutionizing the roofing industry by offering energy-efficient, sustainable, and cost-effective solutions for both residential and commercial buildings here you will get a detailed understanding of cool roofing its benefits, and how it works. Whether you&apos;re a homeowner, contractor, or building manager, we will help you understand why cool roof coatings are a smart choice for modern roofing needs.
          </p>
          <p>
            Cool roofing refers to using reflective materials or coatings on rooftops to reduce heat absorption and improve energy efficiency. These coatings are designed to reflect more sunlight and emit more heat than traditional roofing materials, helping to keep the building cooler and reducing the need for HVAC air conditioning.
          </p>
        </div>

        {/* Key Parameters */}
        <h3 className="section-heading-24">Cool Roofing – Key Parameters</h3>
        <div className="crc-info-cards">
          <div className="crc-info-card">
            <h3>Solar Reflectance</h3>
            <p>Solar reflectivity measures how much sunlight a roof can reflect. Cool roofs are designed to have high solar reflectivity, meaning they reflect a significant portion of the solar rays rather than absorbing them. This reduces the amount of heat transferred to the building.</p>
          </div>
          <div className="crc-info-card">
            <h3>Thermal Emittance</h3>
            <p>Thermal emittance refers to a roof&apos;s ability to release absorbed heat. Cool roofs have high thermal emittance, allowing them to radiate heat back into the atmosphere efficiently. This prevents heat from being trapped in the roofing material and transferred into the building.</p>
          </div>
          <div className="crc-info-card">
            <h3>Solar Reflectance Index (SRI)</h3>
            <p>SRI is a combined measure of a roof&apos;s reflectivity and emittance. It provides a comprehensive score that indicates how well a roof can stay cool under the sun. The higher the SRI, the better the roof&apos;s cooling performance.</p>
          </div>
        </div>

        {/* Features Image */}
        <div className="section-block-center">
          <Image src="/images/products/coolroof/features.webp" alt="Cool Roof Features" width={1000} height={500} className="image-full-rounded-15" />
        </div>

        <div className="product-description">
          <p>
            These parameters allow roofs to reflect sunlight, emit absorbed heat, and maintain lower surface temperatures compared to conventional roofs. By reducing heat transfer into the building, cool roof helps lower inside temperatures, increase convenience and decrease energy consumption.
          </p>
        </div>

        {/* Benefits */}
        <h3 className="section-heading-22">Cool roof coating offers a wide range of benefits, making them an ideal choice for modern roofing systems.</h3>
        <div className="crc-circle-row">
          <div className="crc-circle-box">
            <h3>Energy Savings</h3>
            <p>Reflecting sunlight and lowering inside temperatures substantially reduces the need for air conditioning. This can lead to significant energy savings, especially in hot climates.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Reduce Carbon Footprint &amp; HVAC Use</h3>
            <p>Cool Roof Coating helps reduce greenhouse gas emissions. Additionally, it decreases the strain on HVAC systems, leading to lower maintenance costs and longer equipment life.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Roof Restoration</h3>
            <p>Cool roof coating can restore ageing or damaged roofs by providing a protective layer that seals cracks, fills gaps, and improves the roof&apos;s overall durability.</p>
          </div>
          <div className="crc-circle-box">
            <h3>Waterproofing</h3>
            <p>Cool roof coatings often come with waterproofing properties, protecting the roof from water damage, leaks, and moisture-related issues. This extends the life of the roof and prevents costly repairs.</p>
          </div>
        </div>

        {/* Why it matters */}
        <h3 className="section-heading-22">Cool roofing is not just a trend; it&apos;s a sustainable practice with long-term benefits. Here&apos;s why it matters:</h3>
        <div className="crc-info-cards">
          <div className="crc-info-card">
            <h3>Extend Roof Lifespan</h3>
            <p>Cool roof coating protects from UV radiation, thermal shock, and weather damage, significantly extending lifespan.</p>
          </div>
          <div className="crc-info-card">
            <h3>Energy Savings</h3>
            <p>Reduced energy consumption lowers utility bills and environmental impact through efficient thermal management.</p>
          </div>
          <div className="crc-info-card">
            <h3>Sustainability</h3>
            <p>Reduces urban heat island effect and supports sustainable building practices through energy demand reduction.</p>
          </div>
          <div className="crc-info-card">
            <h3>Beyond SRI</h3>
            <p>Enhances building envelope performance, improves indoor comfort, and reduces heat stress effectively.</p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="product-full-image">
          <Image src="/images/products/coolroof/banner1.webp" alt="Cool Roof Application" width={1200} height={500} className="image-full-rounded-20" />
        </div>

        {/* Roof Performance Comparison */}
        <h3 className="section-heading-22-spaced">On-site Roof Performance After Applying ENERCON Cool Roof Coating</h3>
        <div className="roof-image-comparison">
          <div>
            <Image src="/images/products/coolroof/normal-roof.webp" alt="Normal Roof Image" width={500} height={350} className="image-full-rounded-10" />
            <p>Normal Image</p>
          </div>
          <div>
            <Image src="/images/products/coolroof/infrared-roof.webp" alt="Infrared Roof Image" width={500} height={350} className="image-full-rounded-10" />
            <p>Infrared Image</p>
          </div>
        </div>

        {/* Temperature Data */}
        <h2 className="section-heading-22-spaced">Inside Room Temperature Drop After ENERCON Cool Roof Coating Application</h2>

        <div className="section-note">
          <p><strong>AC Thermostat: 72°F</strong></p>
        </div>

        <table className="temp-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Before Coating (°F)</strong></td>
              <td>77</td>
              <td>77</td>
              <td>78</td>
              <td>75</td>
              <td>77</td>
              <td>79</td>
              <td>77</td>
            </tr>
            <tr>
              <td><strong>After Coating (°F)</strong></td>
              <td>73</td>
              <td>72</td>
              <td>73</td>
              <td>73</td>
              <td>73</td>
              <td>72</td>
              <td>72</td>
            </tr>
          </tbody>
        </table>

        {/* HVAC Box */}
        <div className="hvac-box">
          <h3>HVAC Energy Cost Reduced By 13%</h3>
          <p>Consumption Before: 23,072 KWh</p>
          <p>Consumption After: 20,339 KWh</p>
          <p><strong>Total One Week: 2,733 KWh Saved</strong></p>
        </div>

        {/* SP 300 Section */}
        <div className="product-description section-copy-center">
          <h2 className="section-title">Cool roof coatings have high surface tension, leading to high reflectivity such as in the case of EnerFlex SP 300 which is</h2>
          <div className="crch2-badges">
            <span className="crch2-badge">Durable</span>
            <span className="crch2-badge">Flexible</span>
            <span className="crch2-badge">Eco-Friendly</span>
          </div>
          <div className="section-block-left">
            <h4 className="section-accent-title">Suitable Surfaces:</h4>
            <p><strong>Concrete:</strong> Ideal for flat or low-slope roofs</p>
            <p><strong>Metal:</strong> Provides excellent reflectivity and durability</p>
            <p><strong>Built-Up Roofing (BUR):</strong> Restores and protects traditional BUR systems.</p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="product-full-image">
          <Image src="/images/products/coolroof/banner2.webp" alt="Cool Roof Coating" width={1200} height={500} className="image-full-rounded-20" />
        </div>

        {/* Product Line Cards */}
        <h2 className="section-heading-24">Explore ENERCON Cool Roofing product line</h2>
        <div className="crc-product-cards">
          <Link href="/enerflex-sp-300" className="crc-product-card">
            <Image src="/images/products/coolroof/sp300-card.webp" alt="EnerFlex SP 300" width={300} height={250} className="image-card-contain-250" />
            <h3>EnerFlex SP 300</h3>
          </Link>
          <Link href="/enerflex-sa-200" className="crc-product-card">
            <Image src="/images/products/coolroof/sa200-card.webp" alt="EnerFlex SA 200" width={300} height={250} className="image-card-contain-250" />
            <h3>EnerFlex SA 200</h3>
          </Link>
          <Link href="/enerflex-sb-100" className="crc-product-card">
            <Image src="/images/products/coolroof/sb100-card.webp" alt="EnerFlex SB 100" width={300} height={250} className="image-card-contain-250" />
            <h3>EnerFlex SB 100</h3>
          </Link>
        </div>

        {/* FAQ */}
        <section className="faq-section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item">
            <h4>Q: What is the lifespan of a Enercon Cool Roof Coating?</h4>
            <p>Enercon Cool Roof Coating can last 25-30 years, depending on the material, system used and environmental conditions.</p>
          </div>
          <div className="faq-item">
            <h4>Q: Can Enercon Cool Roof Coatings be applied to any roof?</h4>
            <p>Yes, they can be applied to most roofing surfaces, including concrete, metal, EPDM, TPO and BUR, as long as the surface is properly prepared.</p>
          </div>
          <div className="faq-item">
            <h4>Q: Does Enercon Cool Roof Coating require maintenance?</h4>
            <p>Minimal maintenance is required. Periodic inspections and cleaning can help maintain their performance.</p>
          </div>
          <div className="faq-item">
            <h4>Q: Are Enercon Cool Roof Coatings environment friendly?</h4>
            <p>Yes, they reduce energy consumption and greenhouse gas emissions, making them an eco-friendly choice.</p>
          </div>
          <div className="faq-item">
            <h4>Q: How much energy can I save using Enercon Cool Roof Coating?</h4>
            <p>Energy savings depends on various factors, however studies show that Enercon Cool Roof Coating can reduce cooling energy costs by up to 13%.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
