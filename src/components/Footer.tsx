import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cosmic-navy text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">AusomeHeroes</h3>
            <p className="text-gray-300">
              Empowering autistic children with products they love.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-cosmic-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-cosmic-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-cosmic-coral transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe for updates on new products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-gray-800 rounded-l focus:outline-none flex-grow"
              />
              <button className="bg-cosmic-gold text-cosmic-navy p-2 rounded-r hover:bg-opacity-90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-bold mb-3">Local Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-cosmic-gold" />
                  <Link to="/los-angeles" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="border-b border-dotted border-gray-500">Los Angeles Area</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-center">
          <givebutter-widget id="gMENbg"></givebutter-widget>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="mt-2 text-sm">© 2025 Ausome Heroes. 501(c)(3) Nonprofit. EIN: 93-3634596.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
