import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'EnerSeal Tape | Nano Seal Waterproof Adhesive Technology',
  description:
    'EnerSeal Tape introduces nano seal technology for high-performance waterproofing, sealing, and joint protection across roof and construction applications.',
  path: '/enerseal-tape',
  keywords: ['EnerSeal Tape', 'waterproofing tape', 'nano seal technology', 'roof adhesive tape'],
});

const enersealTapeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EnerSeal Tape",
  "description": "EnerSeal Tape introduces nano seal technology for high-performance waterproofing, sealing, and joint protection across roof and construction applications.",
  "brand": { "@type": "Brand", "name": "Enercon Group" },
  "manufacturer": { "@type": "Organization", "name": "Enercon Group", "url": "https://enercon-group.com" },
  "image": "https://enercon-group.com/images/products/tape/tape1.webp",
  "url": "https://enercon-group.com/enerseal-tape",
  "category": "Waterproofing Tape"
};

export default function EnersealTapeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enersealTapeJsonLd) }} />
      {children}
    </>
  );
}
