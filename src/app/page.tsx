import HeroSection from "@/components/features/hero/HeroSection";
import AboutSection from "@/components/features/about/AboutSection";
import ThoughtsSection from "@/components/features/thoughts/ThoughtsSection";
import ServicesSection from "@/components/features/services/ServicesSection";
import FooterSection from "@/components/features/footer/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ThoughtsSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
