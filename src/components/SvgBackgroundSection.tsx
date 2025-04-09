
import React from 'react';

const SvgBackgroundSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-cosmic-dark">
      {/* Nebula effect */}
      <div className="nebula-effect"></div>
      
      {/* Stars animation */}
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
      
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full opacity-25 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 1500"
          className="w-full h-full transform scale-110 object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect fill="#000080" width="2000" height="1500" />
          <defs>
            <radialGradient id="a" cx="1000" cy="750" r="600" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#9400D3" />
              <stop offset="1" stopColor="#000080" />
            </radialGradient>
            <radialGradient id="b" cx="1050" cy="800" r="1200" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF6B6B" stopOpacity="0.5" />
              <stop offset="1" stopColor="#000080" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle fill="url(#a)" cx="1000" cy="750" r="600" />
          <circle fill="url(#b)" cx="1050" cy="800" r="1200" className="animate-nebula-move" />
          <g className="animate-star-twinkle">
            {/* Stars */}
            <circle fill="#FFFFFF" cx="200" cy="200" r="5" />
            <circle fill="#FFFFFF" cx="400" cy="300" r="3" />
            <circle fill="#FFFFFF" cx="600" cy="200" r="4" />
            <circle fill="#FFFFFF" cx="800" cy="300" r="2" />
            <circle fill="#FFFFFF" cx="1000" cy="200" r="3" />
            <circle fill="#FFFFFF" cx="1200" cy="300" r="4" />
            <circle fill="#FFFFFF" cx="1400" cy="200" r="2" />
            <circle fill="#FFFFFF" cx="1600" cy="300" r="5" />
            <circle fill="#FFFFFF" cx="1800" cy="200" r="3" />
            <circle fill="#FFFFFF" cx="300" cy="400" r="4" />
            <circle fill="#FFFFFF" cx="500" cy="500" r="2" />
            <circle fill="#FFFFFF" cx="700" cy="400" r="3" />
            <circle fill="#FFFFFF" cx="900" cy="500" r="5" />
            <circle fill="#FFFFFF" cx="1100" cy="400" r="2" />
            <circle fill="#FFFFFF" cx="1300" cy="500" r="4" />
            <circle fill="#FFFFFF" cx="1500" cy="400" r="3" />
            <circle fill="#FFFFFF" cx="1700" cy="500" r="2" />
            <circle fill="#FFFFFF" cx="250" cy="600" r="5" />
            <circle fill="#FFFFFF" cx="450" cy="700" r="3" />
            <circle fill="#FFFFFF" cx="650" cy="600" r="2" />
            <circle fill="#FFFFFF" cx="850" cy="700" r="4" />
            <circle fill="#FFFFFF" cx="1050" cy="600" r="3" />
            <circle fill="#FFFFFF" cx="1250" cy="700" r="5" />
            <circle fill="#FFFFFF" cx="1450" cy="600" r="2" />
            <circle fill="#FFFFFF" cx="1650" cy="700" r="3" />
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center items-center">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight cosmic-shadow">
            A Universe of Support
          </h2>
          <p className="text-xl md:text-2xl text-cosmic-light mb-8 leading-relaxed">
            Guiding children through their unique cosmic journey
          </p>
          <div className="animate-float mb-12">
            <svg width="160" height="160" viewBox="0 0 160 160" className="mx-auto">
              <circle cx="80" cy="80" r="70" fill="none" stroke="#FFD700" strokeWidth="2" strokeDasharray="10 5" />
              <circle cx="80" cy="80" r="50" fill="rgba(148, 0, 211, 0.3)" />
              <g className="animate-spin-slow">
                <circle cx="80" cy="20" r="8" fill="#FF6B6B" />
                <circle cx="140" cy="80" r="6" fill="#00BFFF" />
                <circle cx="80" cy="140" r="10" fill="#E5DEFF" />
                <circle cx="20" cy="80" r="7" fill="#FFD700" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvgBackgroundSection;
