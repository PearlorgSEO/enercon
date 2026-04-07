import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Become an Applicator | Enercon Certified Applicator Program',
  description:
    'Apply to become an Enercon certified applicator and grow your business with advanced waterproofing products, training, and technical support.',
  path: '/became-an-applicator',
  keywords: ['become applicator', 'roof coating applicator program', 'waterproofing contractor partnership'],
});

export default function BecameAnApplicatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
