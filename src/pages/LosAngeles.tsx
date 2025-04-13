import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, School, Calendar, HeartHandshake } from "lucide-react";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";

const LosAngeles = () => {
  useEffect(() => {
    // Dynamically load the Givebutter script specific to Los Angeles page
    const script = document.createElement('script');
    script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=SEcIN0fMhshDZm0k&p=other";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section with Cosmic Theme */}
        <div className="relative overflow-hidden bg-cosmic-navy py-20">
          {/* Nebula effect */}
          <div className="nebula-effect"></div>
          
          {/* Stars animation */}
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 pt-16 pb-24">
            <div className="max-w-2xl mx-auto text-center backdrop-blur-sm bg-black/40 rounded-xl p-8 border border-white/10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Supporting Autistic{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#00BFFF]">
                  Heroes
                </span>{" "}
                in Los Angeles
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Every child deserves to shine. Discover specialized products and resources 
                for autistic children throughout Greater Los Angeles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#FFD700] hover:bg-[#FFC400] text-[#4B0082] font-bold transition-colors"
                  size="lg"
                >
                  <Link to="/products" className="flex items-center gap-2">
                    Explore Products
                  </Link>
                </Button>
                <Button
                  className="bg-cosmic-coral hover:bg-cosmic-coral/90 text-white font-bold transition-colors"
                  size="lg"
                >
                  <Link to="#resources">Local Resources</Link>
                </Button>
              </div>
              
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-3 animate-bounce">
                  <span className="text-white">Scroll to explore</span>
                  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add the Universe SVG Background Section */}
        <SvgBackgroundSection />

        {/* Local Resources Section - Improved for better readability */}
        <div id="resources" className="py-16 px-6 bg-cosmic-light">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-cosmic-dark">Local Resources in Los Angeles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Resource Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-cosmic-purple" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-dark">Support Groups</h3>
                <p className="text-gray-700 mb-4">
                  Connect with other parents and caregivers of autistic children in LA through local support groups.
                </p>
                <a href="#" className="text-cosmic-purple hover:text-cosmic-blue transition-colors font-medium">
                  Find Support Groups →
                </a>
              </div>
              
              {/* Resource Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cosmic-blue/10 rounded-full flex items-center justify-center mb-4">
                  <School className="text-cosmic-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-dark">Educational Programs</h3>
                <p className="text-gray-700 mb-4">
                  Explore specialized educational programs and schools in Los Angeles for autistic children.
                </p>
                <a href="#" className="text-cosmic-purple hover:text-cosmic-blue transition-colors font-medium">
                  Browse Programs →
                </a>
              </div>
              
              {/* Resource Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cosmic-coral/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-cosmic-coral" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-dark">Events & Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Stay updated on upcoming events, workshops, and activities for autistic children in LA.
                </p>
                <a href="#" className="text-cosmic-purple hover:text-cosmic-blue transition-colors font-medium">
                  View Calendar →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* LA Community Section */}
        <div className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cosmic-dark">Serving the Los Angeles Community</h2>
                <p className="text-gray-700 mb-4">
                  At AusomeHeroes, we're proud to support autistic children and their families throughout Los Angeles County, including:
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Santa Monica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Pasadena</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Long Beach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Burbank</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Glendale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cosmic-coral" />
                    <span>Torrance</span>
                  </div>
                </div>
                <Button 
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white"
                >
                  <HeartHandshake className="mr-2" size={18} />
                  Partner With Us
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* Superhero Kid SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-auto">
                  {/* Background gradient */}
                  <defs>
                    <radialGradient id="spaceGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#1a0033" />
                      <stop offset="100%" stopColor="#000011" />
                    </radialGradient>
                    
                    {/* Star glow */}
                    <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    {/* Hero glow effect */}
                    <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="glow" />
                      <feComposite in="SourceGraphic" in2="glow" operator="over" />
                    </filter>
                    
                    {/* Cape flow effect */}
                    <linearGradient id="capeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff3366" />
                      <stop offset="100%" stopColor="#cc0044" />
                    </linearGradient>
                  </defs>
                  
                  {/* Space background */}
                  <rect width="800" height="600" fill="url(#spaceGradient)" />
                  
                  {/* Stars */}
                  <g id="stars">
                    {/* Small stars */}
                    <g opacity="0.8" filter="url(#starGlow)">
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
                    <g filter="url(#starGlow)">
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
                  <g transform="translate(400, 300)" filter="url(#heroGlow)">
                    {/* Cape flowing */}
                    <path d="M0,0 C-20,-20 -40,-10 -50,20 C-60,60 -70,100 -65,140 C-60,160 -40,150 -35,130 C-30,110 -25,90 -15,80 C-5,70 0,60 0,60" 
                      fill="url(#capeGradient)">
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
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 px-6 bg-cosmic-dark text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Products for Your Child?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our curated selection of sensory-friendly products designed specifically for autistic children in Los Angeles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-cosmic-dark font-bold"
                size="lg"
              >
                <Link to="/products">Shop Our Products</Link>
              </Button>
              <Button 
                className="bg-cosmic-blue hover:bg-cosmic-blue/90 text-white font-bold"
                size="lg"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LosAngeles;
