import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import InclusionBar from "@/components/sections/InclusionBar";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-dark-green">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <InclusionBar />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}