
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SensoryProductsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cosmic-navy to-cosmic-navy/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sensory-Friendly Products Designed With Care
            </h2>
            <p className="text-lg text-cosmic-light">
              Carefully selected items that provide comfort, stimulation, and 
              support for children with sensory needs. Each product is 
              thoughtfully designed to enhance their development journey.
            </p>
            <Button className="bg-cosmic-coral hover:bg-cosmic-coral/80 text-white">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-cosmic">
            {/* Superhero Kid SVG instead of placeholder image */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-auto rounded-lg mb-6">
              {/* Background gradient */}
              <defs>
                <radialGradient id="spaceGradientHome" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#1a0033" />
                  <stop offset="100%" stopColor="#000011" />
                </radialGradient>
                
                {/* Star glow */}
                <filter id="starGlowHome" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* Hero glow effect */}
                <filter id="heroGlowHome" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
                
                {/* Cape flow effect */}
                <linearGradient id="capeGradientHome" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff3366" />
                  <stop offset="100%" stopColor="#cc0044" />
                </linearGradient>
              </defs>
              
              {/* Space background */}
              <rect width="800" height="600" fill="url(#spaceGradientHome)" />
              
              {/* Stars */}
              <g id="starsHome">
                {/* Small stars */}
                <g opacity="0.8" filter="url(#starGlowHome)">
                  <circle cx="100" cy="80" r="1" fill="white" />
                  <circle cx="200" cy="150" r="1.5" fill="white" />
                  <circle cx="300" cy="100" r="1" fill="white" />
                  <circle cx="400" cy="80" r="1.2" fill="white" />
                  <circle cx="500" cy="120" r="1" fill="white" />
                  <circle cx="600" cy="90" r="1.5" fill="white" />
                  <circle cx="700" cy="170" r="1" fill="white" />
                  <circle cx="150" cy="200" r="1.3" fill="white" />
                  <circle cx="250" cy="250" r="1" fill="white" />
                  <circle cx="350" cy="220" r="1.2" fill="white" />
                  <circle cx="450" cy="270" r="1" fill="white" />
                  <circle cx="550" cy="240" r="1.5" fill="white" />
                  <circle cx="650" cy="290" r="1" fill="white" />
                  <circle cx="750" cy="260" r="1.2" fill="white" />
                </g>
                
                {/* Brighter stars */}
                <g filter="url(#starGlowHome)">
                  <circle cx="120" cy="100" r="2" fill="white" />
                  <circle cx="320" cy="150" r="2.2" fill="white" />
                  <circle cx="520" cy="110" r="2.5" fill="white" />
                  <circle cx="720" cy="180" r="2" fill="white" />
                  <circle cx="170" cy="220" r="2.3" fill="white" />
                  <circle cx="370" cy="270" r="2" fill="white" />
                  <circle cx="570" cy="230" r="2.2" fill="white" />
                  <circle cx="770" cy="280" r="2.5" fill="white" />
                </g>
              </g>
              
              {/* Solar System */}
              {/* Sun */}
              <circle cx="150" cy="450" r="40" fill="#ffcc00">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Planets */}
              {/* Mercury */}
              <circle cx="210" cy="450" r="5" fill="#aa8866" />
              
              {/* Venus */}
              <circle cx="260" cy="450" r="12" fill="#ddbb88" />
              
              {/* Earth */}
              <circle cx="320" cy="450" r="13" fill="#3366cc">
                <animate attributeName="fill" values="#3366cc;#3377dd;#3366cc" dur="5s" repeatCount="indefinite" />
              </circle>
              
              {/* Mars */}
              <circle cx="380" cy="450" r="7" fill="#cc3333" />
              
              {/* Jupiter */}
              <circle cx="460" cy="450" r="25" fill="#ddaa66" />
              
              {/* Saturn with rings */}
              <g>
                <ellipse cx="550" cy="450" rx="35" ry="7" fill="#aa8855" opacity="0.7" />
                <circle cx="550" cy="450" r="20" fill="#ccaa66" />
              </g>
              
              {/* Uranus */}
              <circle cx="630" cy="450" r="17" fill="#66ccdd" />
              
              {/* Neptune */}
              <circle cx="700" cy="450" r="16" fill="#3355aa" />
              
              {/* Superhero Kid */}
              <g transform="translate(400, 300)" filter="url(#heroGlowHome)">
                {/* Cape flowing */}
                <path d="M0,0 C-20,-20 -40,-10 -50,20 C-60,60 -70,100 -65,140 C-60,160 -40,150 -35,130 C-30,110 -25,90 -15,80 C-5,70 0,60 0,60" 
                  fill="url(#capeGradientHome)">
                  <animate attributeName="d" 
                    values="M0,0 C-20,-20 -40,-10 -50,20 C-60,60 -70,100 -65,140 C-60,160 -40,150 -35,130 C-30,110 -25,90 -15,80 C-5,70 0,60 0,60;
                            M0,0 C-20,-20 -45,-5 -55,25 C-65,65 -75,105 -70,145 C-65,165 -45,155 -40,135 C-35,115 -30,95 -20,85 C-10,75 0,60 0,60;
                            M0,0 C-20,-20 -40,-10 -50,20 C-60,60 -70,100 -65,140 C-60,160 -40,150 -35,130 C-30,110 -25,90 -15,80 C-5,70 0,60 0,60" 
                    dur="3s" repeatCount="indefinite" />
                </path>
                
                {/* Body */}
                <circle cx="0" cy="0" r="30" fill="#4488ff" />
                
                {/* Head */}
                <circle cx="0" cy="-45" r="25" fill="#ffcc99" />
                
                {/* Mask */}
                <path d="M-15,-55 Q0,-65 15,-55 Q15,-45 0,-45 Q-15,-45 -15,-55" fill="#4488ff" />
                
                {/* Eyes */}
                <circle cx="-10" cy="-50" r="5" fill="white" />
                <circle cx="10" cy="-50" r="5" fill="white" />
                <circle cx="-10" cy="-50" r="2" fill="#000" />
                <circle cx="10" cy="-50" r="2" fill="#000" />
                
                {/* Smile */}
                <path d="M-10,-35 Q0,-25 10,-35" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                
                {/* Arms */}
                <line x1="30" y1="0" x2="60" y2="-30" stroke="#ffcc99" strokeWidth="12" strokeLinecap="round">
                  <animate attributeName="y2" values="-30;-40;-30" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="-30" y1="0" x2="-60" y2="-30" stroke="#ffcc99" strokeWidth="12" strokeLinecap="round">
                  <animate attributeName="y2" values="-30;-20;-30" dur="2s" repeatCount="indefinite" />
                </line>
                
                {/* Legs */}
                <line x1="15" y1="30" x2="25" y2="70" stroke="#ffcc99" strokeWidth="12" strokeLinecap="round" />
                <line x1="-15" y1="30" x2="-25" y2="70" stroke="#ffcc99" strokeWidth="12" strokeLinecap="round" />
                
                {/* Boots */}
                <rect x="15" y="70" width="20" height="15" rx="5" fill="#4488ff" />
                <rect x="-35" y="70" width="20" height="15" rx="5" fill="#4488ff" />
                
                {/* Logo */}
                <text x="0" y="10" fontFamily="Arial" fontSize="24" fontWeight="bold" textAnchor="middle" fill="yellow">S</text>
                
                {/* Belt */}
                <rect x="-30" y="30" width="60" height="10" fill="yellow" />
              </g>
              
              {/* Cool Effects */}
              {/* Energy Aura */}
              <g>
                <ellipse cx="400" cy="300" rx="100" ry="150" fill="none" stroke="#88ccff" strokeWidth="3" opacity="0.6">
                  <animate attributeName="rx" values="100;110;100" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="150;160;150" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="400" cy="300" rx="120" ry="170" fill="none" stroke="#88ccff" strokeWidth="2" opacity="0.4">
                  <animate attributeName="rx" values="120;130;120" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="170;180;170" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
                </ellipse>
              </g>
              
              {/* Action lines */}
              <g opacity="0.7">
                <line x1="300" y1="200" x2="280" y2="180" stroke="white" strokeWidth="2">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="500" y1="200" x2="520" y2="180" stroke="white" strokeWidth="2">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="350" y1="150" x2="340" y2="120" stroke="white" strokeWidth="2">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="450" y1="150" x2="460" y2="120" stroke="white" strokeWidth="2">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.2s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Sparkle effects around the kid */}
              <g>
                <circle cx="350" cy="220" r="3" fill="yellow" opacity="0.8">
                  <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="220" r="4" fill="yellow" opacity="0.8">
                  <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="370" r="3" fill="yellow" opacity="0.8">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Cosmic rays */}
              <g opacity="0.5">
                <path d="M100,100 L150,150" stroke="#88ffff" strokeWidth="1">
                  <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M700,100 L650,150" stroke="#88ffff" strokeWidth="1">
                  <animate attributeName="opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M100,500 L150,450" stroke="#88ffff" strokeWidth="1">
                  <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.5s" repeatCount="indefinite" />
                </path>
                <path d="M700,500 L650,450" stroke="#88ffff" strokeWidth="1">
                  <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-light rounded-full text-sm">Sensory Toys</span>
              <span className="px-3 py-1 bg-cosmic-teal/20 text-cosmic-light rounded-full text-sm">Comfort Items</span>
              <span className="px-3 py-1 bg-cosmic-coral/20 text-cosmic-light rounded-full text-sm">Educational Tools</span>
            </div>
            <p className="text-cosmic-light text-sm">
              Our products are designed to support sensory regulation, motor skills development,
              and provide calming comfort for children on the autism spectrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensoryProductsSection;
