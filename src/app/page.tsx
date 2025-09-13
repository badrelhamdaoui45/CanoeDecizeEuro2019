import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import GallerySection from '@/components/gallery-section';
import NewPartnerSection from '@/components/new-partner-section';
import SponsorsSection from '@/components/sponsors-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <NewPartnerSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
