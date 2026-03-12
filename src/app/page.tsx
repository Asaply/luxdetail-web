import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FeatureBanner from "@/components/FeatureBanner";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeatureBanner />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
