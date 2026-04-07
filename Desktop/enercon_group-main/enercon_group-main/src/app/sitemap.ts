import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://enercon-group.com';

const routes = [
  '',
  '/about-us',
  '/contact',
  '/became-an-applicator',
  '/completed-projects',
  '/roof-restoration',
  '/metal-roof',
  '/concrete-roof',
  '/bur',
  '/cool-roof-coatings',
  '/enercon-floor-coatings',
  '/enerflex-sp-300',
  '/enerflex-sa-200',
  '/enerflex-sb-100',
  '/enerthane-ap250',
  '/enerthane-ar150',
  '/enerseal-tape',
  '/silicone-sealants',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
