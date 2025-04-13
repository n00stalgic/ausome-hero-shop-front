
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
    </div>
  );
};

export default HeroButtons;
