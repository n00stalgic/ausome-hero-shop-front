
import React from "react";
import { Heart, Users, Sparkles } from "lucide-react";

const HeroFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-gold/20 p-2 rounded-full">
          <Heart className="text-cosmic-gold" size={24} />
        </div>
        <span className="font-medium">Community Support</span>
      </div>
      
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-teal/20 p-2 rounded-full">
          <Users className="text-cosmic-teal" size={24} />
        </div>
        <span className="font-medium">Family Resources</span>
      </div>
      
      <div className="flex items-center gap-3 text-white">
        <div className="bg-cosmic-coral/20 p-2 rounded-full">
          <Sparkles className="text-cosmic-coral" size={24} />
        </div>
        <span className="font-medium">Inclusive Events</span>
      </div>
    </div>
  );
};

export default HeroFeatures;
