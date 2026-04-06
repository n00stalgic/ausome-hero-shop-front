import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import BadgeSection from "@/components/home/BadgeSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import EventsSection from "@/components/events/EventsSection";
import WaysToHelp from "@/components/home/WaysToHelp";
import Testimonial from "@/components/home/Testimonial";
import BlogPreview from "@/components/home/BlogPreview";
import EmailCapture from "@/components/home/EmailCapture";
import PartnerLogos from "@/components/home/PartnerLogos";
import CosmicDivider from "@/components/home/CosmicDivider";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <ImpactSection />
        {/* IG community gallery — coming soon */}
        <CosmicDivider />
        <Testimonial />
        <CosmicDivider />
        <BadgeSection />
        <CosmicDivider />
        <OfferingsSection />
        <CosmicDivider />
        <EventsSection />
        <CosmicDivider />
        <WaysToHelp />
        <CosmicDivider />
        <BlogPreview />
        <EmailCapture />
        <PartnerLogos />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
