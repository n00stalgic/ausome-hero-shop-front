import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, School, Calendar, HeartHandshake } from "lucide-react";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";

const LosAngeles = () => {
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

        {/* Add the Universe SVG Background Section */}
        <SvgBackgroundSection />

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
