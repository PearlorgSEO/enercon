import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';
import SealantProduct from '@/components/SealantProduct';
import { sealants } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import '../products.css';

export const metadata: Metadata = buildMetadata({
  title: 'Sealants & Mastic | EnerSeal Product Range',
  description:
    'Explore EnerSeal silicone sealants and mastic products for durable waterproof sealing, bonding, and weather-resistant construction applications.',
  path: '/silicone-sealants',
  keywords: ['silicone sealant', 'mastic sealant', 'construction waterproof sealant'],
});

const sealantsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "EnerSeal Silicone Sealants",
  "description": "Explore EnerSeal silicone sealants and mastic products for durable waterproof sealing, bonding, and weather-resistant construction applications.",
  "url": "https://enercon-group.com/silicone-sealants",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "EnerSil Mastic – 100% Silicone Sealant",
        "description": "Heavy duty sealant for weather and water protection with extreme flexibility and excellent adhesion on multi-surfaces.",
        "brand": { "@type": "Brand", "name": "Enercon Group" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "EnerSil AP – All Purpose Silicone Sealant",
        "description": "100% Silicone sealant for all purposes with maximum flexibility, adhesion, and resistance to weather variations.",
        "brand": { "@type": "Brand", "name": "Enercon Group" }
      }
    }
  ]
};

const SHELF_LIFE = 'At least 12 months in storage areas with normal temperature and humidity';
const PACKAGING = '600 ml Sausage, box contains 10 Sausages';

const products = [
  {
    mockupSrc: '/images/products/sealant/mastic-mockup.webp',
    mockupAlt: 'EnerSil Mastic',
    title: 'EnerSil Mastic – 100% Silicone Sealant',
    features: [
      'Heavy duty sealant for weather and water protection',
      'Fast drying, extreme flexibility and quick recovery makes it suitable for joints with extreme movements',
      'Excellent adhesion even with multi-surfaces',
      'Extreme strength in various applications and with most of building materials, such as concrete, metal, tile, insulation foam, and other substrates',
      'Application Temperature Range – -20°F (-29°C) to 122°F (50°C)',
      'Service Temperature Range – -58°F (-50°C) to 392°F (200°C)',
      'Low odor and can be used both in interiors and exteriors',
    ],
    colors: 'White, Grey, Black, Clear',
    packaging: PACKAGING,
    shelfLife: SHELF_LIFE,
    docs: [
      { label: 'TDS', previewSrc: '/images/products/sealant/enersil-mastic-tds-preview.webp', href: sealants.mastic.tds },
      { label: 'SDS', previewSrc: '/images/products/sealant/enersil-mastic-sds-preview.webp', href: sealants.mastic.sds },
    ],
  },
  {
    mockupSrc: '/images/products/sealant/ap-mockup.webp',
    mockupAlt: 'EnerSil AP',
    title: 'EnerSil AP – All Purpose Silicone Sealant',
    features: [
      '100% Silicone sealant for all purposes',
      'Provides maximum flexibility and adhesion',
      'General purpose construction applications: aluminum window, roof, shop exteriors, show case sealings and glass applications',
      'Cure to form 100% silicone rubber',
      'Fast cure with high strength',
      'Resistant to weather variations, thermal cycling and UV',
      'Application Temperature Range – -20°F (-29°C) to 122°F (50°C)',
      'Service Temperature Range – -40°F (-40°C) to 349°F (176°C)',
    ],
    colors: 'White, Black, Clear',
    packaging: PACKAGING,
    shelfLife: SHELF_LIFE,
    docs: [
      { label: 'TDS', previewSrc: '/images/products/sealant/enersil-ap-tds-preview.webp', href: sealants.ap.tds },
      { label: 'SDS', previewSrc: '/images/products/sealant/enersil-ap-sds-preview.webp', href: sealants.ap.sds },
    ],
  },
];

export default function SealantMasticPage() {
  return (
    <div className="page-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sealantsJsonLd) }} />
      <PageHeader title="Sealant &amp; Mastic" />
      <div className="sealant-container">
        {products.map((product) => (
          <SealantProduct key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
}
