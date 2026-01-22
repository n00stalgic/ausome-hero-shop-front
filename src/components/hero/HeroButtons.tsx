
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DonateButton from "@/components/DonateButton";

const HeroButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col sm:flex-row gap-4 mb-2">
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
