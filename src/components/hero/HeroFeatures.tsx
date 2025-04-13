
import React from "react";
import { Star, Shield, Zap } from "lucide-react";

const HeroFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-gold/20 p-2 rounded-full">
          <Star className="text-cosmic-gold" size={24} />
        </div>
        <span className="font-medium">High-Quality Products</span>
      </div>
      
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-teal/20 p-2 rounded-full">
          <Shield className="text-cosmic-teal" size={24} />
        </div>
        <span className="font-medium">Safe & Tested</span>
      </div>
      
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-coral/20 p-2 rounded-full">
          <Zap className="text-cosmic-coral" size={24} />
        </div>
        <span className="font-medium">Fast Delivery</span>
      </div>
    </div>
  );
};

export default HeroFeatures;
