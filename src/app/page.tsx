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

export default function Home() {
  return (
    <>
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
