import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/events/EventsSection";
import WaysToHelp from "@/components/home/WaysToHelp";
import BlogPreview from "@/components/home/BlogPreview";
import EmailCapture from "@/components/home/EmailCapture";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <EventsSection />
        <WaysToHelp />
        <BlogPreview />
        <EmailCapture />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
