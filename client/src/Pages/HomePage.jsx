import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AgendaSection } from "@/components/sections/AgendaSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <AgendaSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
