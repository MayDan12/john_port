import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientMarquee from "@/components/ClientMarquee";
import ContactCTA from "@/components/ContactCTA";

// The Home component serves as the main landing page for the portfolio website. It imports various sections of the site, such as Hero, FeaturedWork, AboutSection, ServicesSection, ProcessSection, TestimonialsSection, ClientMarquee, and ContactCTA. Each of these components represents a different part of the homepage, providing a comprehensive overview of the designer's work and services. The layout is structured using a flexbox with a vertical gap between each section, ensuring a clean and organized presentation.

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <ClientMarquee />
      <AboutSection />
      <FeaturedWork />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
