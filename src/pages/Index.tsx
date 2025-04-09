
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import { getFeaturedProducts } from "@/services/productService";
import { ProductType } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Sensory-Friendly Products Section - Now below the fold */}
        <section className="py-20 bg-gradient-to-b from-cosmic-navy to-cosmic-navy/80">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Sensory-Friendly Products Designed With Care
                </h2>
                <p className="text-lg text-cosmic-light">
                  Carefully selected items that provide comfort, stimulation, and 
                  support for children with sensory needs. Each product is 
                  thoughtfully designed to enhance their development journey.
                </p>
                <Button className="bg-cosmic-coral hover:bg-cosmic-coral/80 text-white">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-cosmic">
                <img
                  src="https://placehold.co/600x400/9b87f5/FFFFFF/png?text=AusomeHeroes"
                  alt="Sensory-friendly toys and tools"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-light rounded-full text-sm">Sensory Toys</span>
                  <span className="px-3 py-1 bg-cosmic-teal/20 text-cosmic-light rounded-full text-sm">Comfort Items</span>
                  <span className="px-3 py-1 bg-cosmic-coral/20 text-cosmic-light rounded-full text-sm">Educational Tools</span>
                </div>
                <p className="text-cosmic-light text-sm">
                  Our products are designed to support sensory regulation, motor skills development,
                  and provide calming comfort for children on the autism spectrum.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* SVG Background Section - Placed between product section and featured products */}
        <SvgBackgroundSection />
        
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <FeaturedProducts products={featuredProducts} />
        )}
        
        <CategoriesSection />
        <TestimonialsSection />
        <SubscriptionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
