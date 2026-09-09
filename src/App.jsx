import { AboutSection } from "./components/AboutSection";
import { BridalBouquetsSection } from "./components/BridalBouquetsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ProcessCtaSection } from "./components/ProcessCtaSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessCtaSection />
      <GallerySection />
      <BridalBouquetsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
