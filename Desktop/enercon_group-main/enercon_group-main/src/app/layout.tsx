import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://enercon-group.com";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Specialty Chemicals & Advanced Waterproofing Solution USA - Enercon Group",
  description: "Discover top-quality waterproofing solutions in USA with expert contractors. From roof waterproofing to complete services, we ensure long-lasting protection.",
  keywords: "waterproofing, silicone coating, roof restoration, enercon, specialty chemicals, USA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Enercon Group",
    title: "Specialty Chemicals & Advanced Waterproofing Solution USA - Enercon Group",
    description: "Discover top-quality waterproofing solutions in USA with expert contractors. From roof waterproofing to complete services, we ensure long-lasting protection.",
    images: [
      {
        url: "/images/common/enercondubai_logo.webp",
        width: 512,
        height: 512,
        alt: "Enercon Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialty Chemicals & Advanced Waterproofing Solution USA - Enercon Group",
    description: "Discover top-quality waterproofing solutions in USA with expert contractors. From roof waterproofing to complete services, we ensure long-lasting protection.",
    images: ["/images/common/enercondubai_logo.webp"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/images/common/enercondubai_logo.webp',
    shortcut: '/images/common/enercondubai_logo.webp',
    apple: '/images/common/enercondubai_logo.webp',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": siteUrl + "/#organization",
                  "name": "Enercon Group",
                  "url": siteUrl,
                  "logo": {
                    "@type": "ImageObject",
                    "url": siteUrl + "/images/common/enercondubai_logo.webp"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "areaServed": ["US", "AE"],
                    "availableLanguage": "English"
                  },
                  "address": [
                    {
                      "@type": "PostalAddress",
                      "addressLocality": "Tampa",
                      "addressRegion": "FL",
                      "addressCountry": "US"
                    },
                    {
                      "@type": "PostalAddress",
                      "addressLocality": "Dubai",
                      "addressCountry": "AE"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": siteUrl + "/#website",
                  "url": siteUrl,
                  "name": "Enercon Group",
                  "publisher": { "@id": siteUrl + "/#organization" }
                }
              ]
            })
          }}
        />
        <div id="page" className="site">
          <Header />
          <div id="content" className="site-content">
            <div className="content-inner">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
