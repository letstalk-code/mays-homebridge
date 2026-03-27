import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://mayshomebridgellc.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "May's HomeBridge - Your Trusted Real Estate Advocate in Mobile, AL",
  description:
    "May's HomeBridge guides homebuyers in Mobile, AL through every step of the process, with expert guidance, honest advice, and fierce advocacy. Book your $100 strategy session today.",
  keywords:
    "real estate advocate Mobile AL, homebuyer advocate Mobile Alabama, home buying help, buyer representation, May's HomeBridge",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "May's HomeBridge",
    title: "May's HomeBridge - Your Trusted Real Estate Advocate in Mobile, AL",
    description:
      "May's HomeBridge guides homebuyers in Mobile, AL through every step of the process, with expert guidance, honest advice, and fierce advocacy. Book your $100 strategy session today.",
    images: [
      {
        url: "/images/New-Red.png",
        width: 1200,
        height: 630,
        alt: "Qunietta L May - Real Estate Advocate and Founder of May's HomeBridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "May's HomeBridge - Your Trusted Real Estate Advocate in Mobile, AL",
    description:
      "May's HomeBridge guides homebuyers in Mobile, AL through every step of the process, with expert guidance, honest advice, and fierce advocacy.",
    images: ["/images/New-Red.png"],
  },
  verification: {
    google: "ZLOL11ZPMPL8AmaVCTSHViKZmwiap7f9cKYZPxK44ks",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "May's HomeBridge LLC",
  url: BASE_URL,
  email: "msqlmay@mayshomebridgellc.com",
  description:
    "May's HomeBridge guides homebuyers in Mobile, AL through every step of the real estate process with expert guidance, honest advice, and fierce advocacy.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6800 Moffett Road",
    addressLocality: "Mobile",
    addressRegion: "AL",
    postalCode: "36618",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Mobile, Alabama",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
