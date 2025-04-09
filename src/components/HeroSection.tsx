
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Every Child Deserves To Be A{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-hero to-hero-blue">
                Hero
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Empowering autistic children with toys and tools that inspire,
              comfort, and bring joy to their everyday adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-hero hover:bg-hero-blue text-white transition-colors"
                size="lg"
              >
                <Link to="/products" className="flex items-center gap-2">
                  Shop Now <ChevronRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-hero text-hero hover:bg-hero hover:text-white transition-colors"
                size="lg"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Star className="text-hero-orange" size={20} />
                <span>High-Quality Products</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="text-hero" size={20} />
                <span>Safe & Tested</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Zap className="text-hero-blue" size={20} />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-lg hero-card animate-float max-w-md mx-auto">
              <img
                src="https://placehold.co/600x400/9b87f5/FFFFFF/png?text=AusomeHeroes"
                alt="Happy children playing with toys"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4 text-hero-dark">
                Sensory-Friendly Products
              </h2>
              <p className="text-gray-600 mb-6">
                Carefully selected items that provide comfort, stimulation, and
                support for children with sensory needs.
              </p>
              <Button className="w-full bg-hero-orange hover:bg-hero text-white transition-colors">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-hero-blue rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-hero rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
