
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, School, Calendar, HeartHandshake } from "lucide-react";

const LosAngeles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-hero/10 to-hero-blue/10 py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Supporting Autistic Children in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-hero to-hero-blue">
                  Los Angeles
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Specialized products and resources for autistic children and their families
                throughout Greater Los Angeles.
              </p>
              <Button
                className="bg-hero hover:bg-hero-blue text-white transition-colors"
                size="lg"
              >
                <Link to="/products" className="flex items-center gap-2">
                  Explore LA-Specific Products
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Local Resources Section */}
        <div className="py-16 px-6 bg-white">
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
                  At AusomeHero's, we're proud to support autistic children and their families throughout Los Angeles County, including:
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
