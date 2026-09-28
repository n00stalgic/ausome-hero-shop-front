import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import HomeEvents from "@/components/home/HomeEvents";
import WaysToHelp from "@/components/home/WaysToHelp";
import SponsorAStar from "@/components/home/SponsorAStar";
import PartnerLogos from "@/components/home/PartnerLogos";
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
        <HomeEvents />
        <WaysToHelp />
        <SponsorAStar />
        <PartnerLogos />
        <BlogPreview />
        <EmailCapture />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
