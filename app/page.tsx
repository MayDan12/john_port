import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientMarquee from "@/components/ClientMarquee";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <ClientMarquee />
      <AboutSection />
      <FeaturedWork />
      <ServicesSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <ContactCTA />
    </div>
  );
}
