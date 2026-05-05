import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.teletracfleets.com'),
  title: {
    default: "Teletrac Fleets | Intelligent Fleet & Telematics Solutions",
    template: "%s | Teletrac Fleets"
  },
  description: "East Africa's leading telematics and vehicle tracking fleet management solutions provider. Serving Uganda, Tanzania, and Rwanda.",
  keywords: ["fleet tracking", "telematics", "vehicle tracking", "fleet management", "East Africa", "GPS tracking"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.teletracfleets.com/",
    title: "Teletrac Fleets | Intelligent Fleet & Telematics Solutions",
    description: "East Africa's leading telematics and vehicle tracking fleet management solutions provider.",
    siteName: "Teletrac Fleets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teletrac Fleets | Intelligent Fleet & Telematics Solutions",
    description: "East Africa's leading telematics and vehicle tracking fleet management solutions provider.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teletrac Fleets",
  url: "https://www.teletracfleets.com",
  logo: "https://www.teletracfleets.com/logo.png",
  description: "East Africa's leading telematics and vehicle tracking fleet management solutions provider.",
  areaServed: ["Uganda", "Tanzania", "Rwanda"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased app-container">{children}</body>
    </html>
  );
}
