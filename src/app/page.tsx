import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ThoughtsSection from "@/components/thoughts/ThoughtsSection";
import ServicesSection from "@/components/services/ServicesSection";
import FooterSection from "@/components/footer/FooterSection";

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
