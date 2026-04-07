import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://enercon-group.com';

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildMetadata({ title, description, path, keywords = [] }: BuildMetadataInput): Metadata {
  const canonical = path.startsWith('/') ? path : `/${path}`;
  const url = `${siteUrl}${canonical}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Enercon Group',
      title,
      description,
      images: [
        {
          url: '/images/common/enercondubai_logo.webp',
          width: 512,
          height: 512,
          alt: 'Enercon Group',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/common/enercondubai_logo.webp'],
    },
  };
}
