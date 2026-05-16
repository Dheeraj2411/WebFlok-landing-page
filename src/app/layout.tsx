import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "WEBFLOK | Top Web Design & Social Media Marketing Agency in India",
  description: "WebFlok helps startups and local businesses scale with premium web design, SEO, and strategic Social Media Marketing. Get a fast, high-converting website today.",
  keywords: ["web design agency India", "social media marketing India", "startup website development", "SEO services for small business", "WebFlok agency"],
  authors: [{ name: "WebFlok Team" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "WEBFLOK | Professional Web Design & Marketing",
    description: "Scale your startup with India's most modern web and marketing agency.",
    url: siteConfig.url,
    siteName: "WebFlok",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WebFlok Agency - Modern Web & Marketing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBFLOK | Web Design & SMM Agency",
    description: "Building the next generation of startup websites.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data for Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "WebFlok Agency",
              "image": `${siteConfig.url}/logo.png`,
              "url": siteConfig.url,
              "telephone": siteConfig.contact.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Digital Hub",
                "addressLocality": "New Delhi",
                "addressRegion": "DL",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                siteConfig.social.facebookUrl,
                siteConfig.social.instagramUrl,
                siteConfig.social.linkedinUrl
              ],
              "serviceType": ["Web Design", "Social Media Marketing", "SEO"]
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} min-h-full flex flex-col font-body bg-background text-on-surface`}>
        {children}
      </body>
    </html>
  );
}
