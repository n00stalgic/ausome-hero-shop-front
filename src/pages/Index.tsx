
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
