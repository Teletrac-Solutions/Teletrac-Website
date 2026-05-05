import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import VideoSection from "@/components/VideoSection";
import SafetySolutions from "@/components/SafetySolutions";
import Services from "@/components/Services";
import DeliveryProcess from "@/components/DeliveryProcess";
import Industries from "@/components/Industries";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.teletracfleets.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Teletrac Fleets",
  url: "https://www.teletracfleets.com",
  description: "Intelligent Fleet & Telematics Solutions provider for East Africa.",
};

export default function Home() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DeliveryProcess />
        <Industries />
        <ClientLogos />
        <Testimonials />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
