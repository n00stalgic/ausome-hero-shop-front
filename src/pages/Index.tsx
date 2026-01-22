import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import OfferingsSection from "@/components/OfferingsSection";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";
import NonprofitBadgeSection from "@/components/NonprofitBadgeSection";
import CommunityEventsSection from "@/components/CommunityEventsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Hero Spotlight Section - Added after Hero Section */}
        <section className="py-16 px-6 bg-cosmic-navy/5">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-cosmic-gold/10 to-cosmic-coral/10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Nominate Your Ausome Hero</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Do you know an autistic child or young adult who inspires others through their bravery, creativity, or growth? Help us celebrate their unique story by nominating them for our Hero Spotlight!
              </p>
              <Link to="/hero-spotlight">
                <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8">
                  Nominate a Hero
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Nonprofit Badge Section */}
        <NonprofitBadgeSection />
        
        {/* SVG Background Section */}
        <SvgBackgroundSection />
        
        {/* New Offerings Section */}
        <OfferingsSection />
        
        {/* Community Events Section */}
        <CommunityEventsSection />
        
        <TestimonialsSection />
        <SubscriptionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
