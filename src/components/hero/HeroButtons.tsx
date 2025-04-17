
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DonateButton from "@/components/DonateButton";

const HeroButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        <Button
          className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-bold text-lg px-8 py-6"
          size="lg"
        >
          <Link to="/products" className="flex items-center gap-2">
            Shop Now <ChevronRight size={18} />
          </Link>
        </Button>
        
        <Button
          variant="outline"
          className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 hover:text-white font-bold text-lg px-8 py-6"
          size="lg"
        >
          <Link to="/about">Learn More</Link>
        </Button>
        
        {/* Add Donation Button */}
        <DonateButton 
          variant="purple"
          size="lg"
          className="font-bold text-lg px-8 py-6"
        />
      </div>
      
      {/* Add a subtle instruction line */}
      <p className="text-sm text-white/80 text-center italic">
        Click "Donate Now" to open our secure donation form
      </p>
    </div>
  );
};

export default HeroButtons;
