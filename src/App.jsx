import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/Navbar";
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
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}