
import React from "react";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";

const HeroContent = () => {
  return (
    <div className="bg-cosmic-navy/60 backdrop-blur-md p-8 rounded-xl shadow-cosmic">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md">
        Every Child Deserves To Be A{" "}
        <span className="text-cosmic-gold">Hero</span>
      </h1>
      
      <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
        Empowering autistic children and their families through community,
        resources, and events that inspire confidence and bring joy.
      </p>
      
      <HeroButtons />
      <HeroFeatures />
    </div>
  );
};

export default HeroContent;
