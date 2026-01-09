import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Destinations } from "@/components/Destinations";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Guides } from "@/components/Guides";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Destinations />
      <Stats />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <CTA />
      <Guides />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
