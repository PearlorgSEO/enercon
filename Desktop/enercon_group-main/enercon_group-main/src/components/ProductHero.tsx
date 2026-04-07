import Image from 'next/image';
import { ReactNode } from 'react';

export interface ProductHeroProps {
  /** URL for the hero image (relative to /public). */
  imageSrc: string;
  /** Alt text for the hero image. */
  imageAlt: string;
  /** Width of the image element (defaults to 400). */
  width?: number;
  /** Height of the image element (defaults to 400). */
  height?: number;
  /** Anything that should appear in the text column (headings, lists, paragraphs, etc.). */
  children: ReactNode;
}

/**
 * Generic "product hero" component used by every product page.
 *
 * The styling is handled in `products.css` so the component only
 * supplies the markup and forwards its children into the text column.
 */
export default function ProductHero({
  imageSrc,
  imageAlt,
  width = 400,
  height = 400,
  children,
}: ProductHeroProps) {
  return (
    <section className="product-hero">
      <div className="product-hero-inner">
        <div className="product-hero-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            className="product-hero-media"
          />
        </div>
        <div className="product-hero-text">{children}</div>
      </div>
    </section>
  );
}
