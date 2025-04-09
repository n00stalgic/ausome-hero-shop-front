
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, School, Calendar, HeartHandshake } from "lucide-react";

const LosAngeles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section with SVG Background */}
        <div className="relative overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 w-full h-[650px] z-0">
            <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Definitions */}
              <defs>
                {/* Gradients */}
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#000080" />
                  <stop offset="50%" stopColor="#4B0082" />
                  <stop offset="100%" stopColor="#9400D3" />
                </linearGradient>
                
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FFC400" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
                
                <linearGradient id="tealCoral" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#008080" />
                  <stop offset="100%" stopColor="#FF6B6B" />
                </linearGradient>
                
                <radialGradient id="starGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background */}
              <rect width="1200" height="600" fill="url(#skyGradient)" />
              
              {/* Stars and Space Elements */}
              <g id="spaceElements" opacity="0.7">
                {/* Stars */}
                <g fill="#FFFFFF">
                  <circle cx="100" cy="50" r="1" />
                  <circle cx="200" cy="80" r="1.5" />
                  <circle cx="300" cy="40" r="1" />
                  <circle cx="400" cy="100" r="1.2" />
                  <circle cx="500" cy="60" r="1" />
                  <circle cx="600" cy="90" r="1.5" />
                  <circle cx="700" cy="30" r="1" />
                  <circle cx="800" cy="70" r="1.2" />
                  <circle cx="900" cy="50" r="1" />
                  <circle cx="1000" cy="110" r="1.5" />
                  <circle cx="1100" cy="40" r="1" />
                  <circle cx="150" cy="130" r="1.2" />
                  <circle cx="250" cy="150" r="1" />
                  <circle cx="350" cy="180" r="1.5" />
                  <circle cx="450" cy="140" r="1" />
                  <circle cx="550" cy="170" r="1.2" />
                  <circle cx="650" cy="120" r="1" />
                  <circle cx="750" cy="160" r="1.5" />
                  <circle cx="850" cy="130" r="1" />
                  <circle cx="950" cy="190" r="1.2" />
                  <circle cx="1050" cy="150" r="1" />
                  <circle cx="1150" cy="170" r="1.5" />
                </g>
                
                {/* Glowing Stars */}
                <g filter="url(#glow)">
                  <circle cx="180" cy="60" r="2" fill="white">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="420" cy="120" r="2.5" fill="white">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="680" cy="80" r="2" fill="white">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="920" cy="110" r="2.5" fill="white">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="1090" cy="70" r="2" fill="white">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="4.5s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Nebula */}
                <g opacity="0.3">
                  <ellipse cx="900" cy="200" rx="250" ry="100" fill="#9400D3" opacity="0.3" />
                  <ellipse cx="700" cy="150" rx="150" ry="70" fill="#FF6B6B" opacity="0.2" />
                  <ellipse cx="500" cy="100" rx="200" ry="80" fill="#00BFFF" opacity="0.2" />
                </g>
                
                {/* Planets */}
                <g>
                  <circle cx="950" cy="150" r="30" fill="#008080" opacity="0.6" />
                  <ellipse cx="950" cy="150" rx="40" ry="10" fill="none" stroke="#C0C0C0" strokeWidth="1" opacity="0.7" />
                  
                  <circle cx="350" cy="100" r="20" fill="#FF6B6B" opacity="0.5" />
                  <circle cx="350" cy="100" r="24" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
                </g>
              </g>

              {/* Futuristic City Elements */}
              <g id="futuristicCity" opacity="0.6" transform="translate(0, 320)">
                {/* Gleaming Towers - Semi-transparent */}
                <rect x="100" y="-150" width="20" height="150" fill="#C0C0C0" opacity="0.6" rx="2" ry="2" />
                <rect x="130" y="-120" width="15" height="120" fill="#00BFFF" opacity="0.5" rx="2" ry="2" />
                <rect x="155" y="-180" width="25" height="180" fill="#C0C0C0" opacity="0.6" rx="2" ry="2" />
                <rect x="190" y="-100" width="15" height="100" fill="#00BFFF" opacity="0.5" rx="2" ry="2" />
                <rect x="215" y="-200" width="30" height="200" fill="#C0C0C0" opacity="0.6" rx="2" ry="2" />
                <rect x="255" y="-130" width="20" height="130" fill="#00BFFF" opacity="0.5" rx="2" ry="2" />
                
                {/* Solar Panels */}
                <rect x="140" y="-125" width="10" height="10" fill="#00BFFF" opacity="0.8" />
                <rect x="222" y="-205" width="15" height="10" fill="#00BFFF" opacity="0.8" />
                <rect x="258" y="-135" width="14" height="8" fill="#00BFFF" opacity="0.8" />
                
                {/* LA Skyline */}
                <g transform="translate(290, 0) scale(1.5)">
                  {/* Stylized Griffith Observatory */}
                  <g transform="translate(40, -60)">
                    <rect x="-15" y="0" width="30" height="20" fill="#2F4F4F" rx="2" ry="2" />
                    <circle cx="0" cy="-5" r="10" fill="#2F4F4F" />
                    <rect x="-5" y="-20" width="10" height="15" fill="#2F4F4F" />
                  </g>
                  
                  {/* Stylized Hollywood Sign */}
                  <g transform="translate(90, -40)">
                    <rect x="-30" y="0" width="60" height="10" fill="#FFFFFF" opacity="0.8" />
                    <rect x="-25" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                    <rect x="-15" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                    <rect x="-5" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                    <rect x="5" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                    <rect x="15" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                    <rect x="25" y="-15" width="3" height="15" fill="#FFFFFF" opacity="0.8" />
                  </g>
                  
                  {/* Palm Trees */}
                  <g>
                    <rect x="10" y="-20" width="4" height="20" fill="#2F4F4F" />
                    <path d="M12,-20 C5,-30 0,-25 5,-35 C12,-30 19,-30 25,-35 C18,-25 15,-30 12,-20" fill="#008080" />
                    
                    <rect x="25" y="-15" width="4" height="15" fill="#2F4F4F" />
                    <path d="M27,-15 C20,-25 15,-20 20,-30 C27,-25 34,-25 40,-30 C33,-20 30,-25 27,-15" fill="#008080" />
                  </g>
                </g>
              </g>
              
              {/* Yellow Brick Road */}
              <path d="M-50,450 C150,430 200,470 300,420 C400,380 500,450 600,380 C700,310 800,390 900,320 C1000,250 1100,330 1250,260" 
                    stroke="url(#roadGradient)" strokeWidth="25" fill="none" strokeLinecap="round" filter="url(#softShadow)" />
              
              {/* Autism Representation - Infinity Symbol Neural Network */}
              <g transform="translate(600, 180) scale(0.8)" opacity="0.7">
                {/* Infinity Symbol */}
                <path d="M-40,0 C-40,-30 0,-30 0,0 C0,30 40,30 40,0 C40,-30 0,-30 0,0 C0,30 -40,30 -40,0 Z" 
                      fill="none" stroke="url(#tealCoral)" strokeWidth="3" />
                
                {/* Neural Network Nodes */}
                <circle cx="-40" cy="0" r="6" fill="#008080" />
                <circle cx="-20" cy="-15" r="4" fill="#008080" />
                <circle cx="-10" cy="15" r="4" fill="#FF6B6B" />
                <circle cx="0" cy="0" r="6" fill="#008080" />
                <circle cx="10" cy="-15" r="4" fill="#FF6B6B" />
                <circle cx="20" cy="15" r="4" fill="#008080" />
                <circle cx="40" cy="0" r="6" fill="#FF6B6B" />
                
                {/* Connections */}
                <line x1="-40" y1="0" x2="-20" y2="-15" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="-40" y1="0" x2="-10" y2="15" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="-20" y1="-15" x2="0" y2="0" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="-10" y1="15" x2="0" y2="0" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="0" y1="0" x2="10" y2="-15" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="0" y1="0" x2="20" y2="15" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="10" y1="-15" x2="40" y2="0" stroke="#C0C0C0" strokeWidth="1" />
                <line x1="20" y1="15" x2="40" y2="0" stroke="#C0C0C0" strokeWidth="1" />
              </g>
              
              {/* Checkpoint Icons */}
              <g filter="url(#softShadow)">
                {/* Checkpoint 1: Discovery (Telescope) */}
                <g transform="translate(200, 420)">
                  <circle cx="0" cy="0" r="15" fill="#008080" opacity="0.9" />
                  <g transform="scale(0.5)">
                    <path d="M-10,-15 L10,15 M-10,15 L10,-15" stroke="#FFFFFF" strokeWidth="6" />
                    <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
                  </g>
                  <text x="0" y="30" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fill="#FFFFFF" textAnchor="middle">DISCOVERY</text>
                </g>
                
                {/* Checkpoint 2: New Toys (Floating Blocks) */}
                <g transform="translate(400, 380)">
                  <circle cx="0" cy="0" r="15" fill="#FF6B6B" opacity="0.9" />
                  <g transform="scale(0.5)">
                    <rect x="-15" y="-15" width="12" height="12" fill="#FFFFFF" />
                    <rect x="3" y="-10" width="12" height="12" fill="#FFFFFF" />
                    <rect x="-7" y="3" width="12" height="12" fill="#FFFFFF" />
                  </g>
                  <text x="0" y="30" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fill="#FFFFFF" textAnchor="middle">NEW TOYS</text>
                </g>
                
                {/* Checkpoint 3: Relationships (Interlocking Circles) */}
                <g transform="translate(600, 340)">
                  <circle cx="0" cy="0" r="15" fill="#00BFFF" opacity="0.9" />
                  <g transform="scale(0.5)">
                    <circle cx="-8" cy="0" r="12" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="8" cy="0" r="12" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                  </g>
                  <text x="0" y="30" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fill="#FFFFFF" textAnchor="middle">RELATIONSHIPS</text>
                </g>
                
                {/* Checkpoint 4: Challenges (Mountain) */}
                <g transform="translate(800, 300)">
                  <circle cx="0" cy="0" r="15" fill="#9400D3" opacity="0.9" />
                  <g transform="scale(0.5)">
                    <path d="M-15,15 L-5,-5 L0,5 L5,-10 L15,15 Z" fill="#FFFFFF" />
                  </g>
                  <text x="0" y="30" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fill="#FFFFFF" textAnchor="middle">CHALLENGES</text>
                </g>
                
                {/* Checkpoint 5: Wins (Trophy/Star) */}
                <g transform="translate(1000, 260)">
                  <circle cx="0" cy="0" r="15" fill="#FFD700" opacity="0.9" />
                  <g transform="scale(0.5)">
                    <path d="M0,-15 L3.5,-5 L14,-5 L6,1.5 L9,12 L0,6 L-9,12 L-6,1.5 L-14,-5 L-3.5,-5 Z" fill="#FFFFFF" />
                  </g>
                  <text x="0" y="30" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fill="#FFFFFF" textAnchor="middle">VICTORIES</text>
                </g>
              </g>
              
              {/* Superhero Silhouettes */}
              <g>
                {/* Parent & Child 1 */}
                <g transform="translate(150, 500)">
                  {/* Parent */}
                  <path d="M0,0 L0,-30 M-15,-15 L0,-30 L15,-15 M-10,-5 L10,-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-40" r="10" fill="#FFFFFF" />
                  {/* Cape */}
                  <path d="M0,-30 C-5,-25 -15,-35 -15,-15" stroke="#FF6B6B" strokeWidth="2" fill="none" />
                  {/* Child */}
                  <g transform="translate(20, 5) scale(0.7)">
                    <path d="M0,0 L0,-30 M-15,-15 L0,-30 L15,-15 M-10,-5 L10,-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="0" cy="-40" r="10" fill="#FFFFFF" />
                    {/* Cape */}
                    <path d="M0,-30 C-5,-25 -15,-35 -15,-15" stroke="#00BFFF" strokeWidth="2" fill="none" />
                  </g>
                </g>
                
                {/* Parent & Child 2 */}
                <g transform="translate(350, 480)">
                  {/* Parent */}
                  <path d="M0,0 L0,-30 M-15,-15 L0,-30 L15,-15 M-10,-5 L10,-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-40" r="10" fill="#FFFFFF" />
                  {/* Cape */}
                  <path d="M0,-30 C5,-25 15,-35 15,-15" stroke="#008080" strokeWidth="2" fill="none" />
                  {/* Child */}
                  <g transform="translate(-15, 5) scale(0.6)">
                    <path d="M0,0 L0,-30 M-15,-15 L0,-30 L15,-15 M-10,-5 L10,-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="0" cy="-40" r="10" fill="#FFFFFF" />
                    {/* Cape */}
                    <path d="M0,-30 C5,-25 15,-35 15,-15" stroke="#FFD700" strokeWidth="2" fill="none" />
                  </g>
                </g>
                
                {/* Child with Special Abilities */}
                <g transform="translate(700, 470)">
                  <path d="M0,0 L0,-25 M-12,-12 L0,-25 L12,-12 M-8,-4 L8,-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-35" r="10" fill="#FFFFFF" />
                  {/* Glowing Emblem */}
                  <circle cx="0" cy="-18" r="5" fill="#FFD700" opacity="0.8">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Cape */}
                  <path d="M-5,-25 C-12,-15 -15,-10 -8,5" stroke="#9400D3" strokeWidth="2" fill="none" />
                  <path d="M5,-25 C12,-15 15,-10 8,5" stroke="#9400D3" strokeWidth="2" fill="none" />
                </g>
                
                {/* Parent with Arms Raised */}
                <g transform="translate(900, 490)">
                  <path d="M0,0 L0,-30 M-20,-40 L0,-30 L20,-40 M-10,-5 L10,-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="-40" r="10" fill="#FFFFFF" />
                  {/* Cape */}
                  <path d="M0,-30 C-10,-20 -15,-10 -10,10" stroke="#00BFFF" strokeWidth="2" fill="none" />
                </g>
              </g>
            </svg>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 pt-24 pb-32">
            <div className="max-w-2xl mx-auto text-center backdrop-blur-sm bg-black/20 rounded-xl p-8 border border-white/10">
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
                  className="bg-[#FFD700] hover:bg-[#FFC400] text-[#4B0082] transition-colors"
                  size="lg"
                >
                  <Link to="/products" className="flex items-center gap-2">
                    Explore Products
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-colors"
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

        {/* Local Resources Section */}
        <div id="resources" className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Local Resources in Los Angeles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Resource Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hero/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-hero" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Support Groups</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other parents and caregivers of autistic children in LA through local support groups.
                </p>
                <a href="#" className="text-hero hover:text-hero-blue transition-colors font-medium">
                  Find Support Groups →
                </a>
              </div>
              
              {/* Resource Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hero-blue/10 rounded-full flex items-center justify-center mb-4">
                  <School className="text-hero-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Educational Programs</h3>
                <p className="text-gray-600 mb-4">
                  Explore specialized educational programs and schools in Los Angeles for autistic children.
                </p>
                <a href="#" className="text-hero hover:text-hero-blue transition-colors font-medium">
                  Browse Programs →
                </a>
              </div>
              
              {/* Resource Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hero-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-hero-orange" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Events & Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated on upcoming events, workshops, and activities for autistic children in LA.
                </p>
                <a href="#" className="text-hero hover:text-hero-blue transition-colors font-medium">
                  View Calendar →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* LA Community Section */}
        <div className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Serving the Los Angeles Community</h2>
                <p className="text-gray-700 mb-4">
                  At AusomeHeroes, we're proud to support autistic children and their families throughout Los Angeles County, including:
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Santa Monica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Pasadena</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Long Beach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Burbank</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Glendale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-hero-orange" />
                    <span>Torrance</span>
                  </div>
                </div>
                <Button variant="outline" className="border-hero text-hero hover:bg-hero hover:text-white">
                  <HeartHandshake className="mr-2" size={18} />
                  Partner With Us
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://placehold.co/800x600/9b87f5/FFFFFF/png?text=Los+Angeles+Community" 
                  alt="Los Angeles Community" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 px-6 bg-hero-dark text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Products for Your Child?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our curated selection of sensory-friendly products designed specifically for autistic children in Los Angeles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-hero-orange hover:bg-opacity-90 text-white"
                size="lg"
              >
                <Link to="/products">Shop Our Products</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hero-dark"
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
