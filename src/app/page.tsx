import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Industries />
        <About />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
