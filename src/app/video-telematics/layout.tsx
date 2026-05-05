import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Telematics & Dashcams",
  description: "End-to-end AI-powered video intelligence. Prevent incidents, protect operators, and improve performance with camera-based safety systems.",
  alternates: {
    canonical: "https://www.teletracfleets.com/video-telematics",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Teletrac AI Video Telematics",
  description: "AI-powered dashcams and DVR systems for fleet safety.",
  brand: {
    "@type": "Brand",
    name: "Teletrac",
  },
};

export default function VideoTelematicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
