
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import OfferingsSection from "@/components/OfferingsSection";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";
import ProductsContainer from "@/components/ProductsContainer";
import NonprofitBadgeSection from "@/components/NonprofitBadgeSection";
import SensoryProductsSection from "@/components/SensoryProductsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Nonprofit Badge Section */}
        <NonprofitBadgeSection />
        
        {/* Sensory-Friendly Products Section - Now below the fold */}
        <SensoryProductsSection />
        
        {/* SVG Background Section - Placed between product section and featured products */}
        <SvgBackgroundSection />
        
        {/* New Offerings Section */}
        <OfferingsSection />
        
        {/* Products Carousel */}
        <ProductsContainer />
        
        <CategoriesSection />
        <TestimonialsSection />
        <SubscriptionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
