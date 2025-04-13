
import React from "react";
import HeroSVGBackground from "./HeroSVGBackground";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <HeroSVGBackground />
      </div>
      
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-cosmic-navy opacity-50 z-1"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-start max-w-3xl">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
