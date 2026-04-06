import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-cosmic-navy text-white py-12 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Ausome Heroes</h3>
          <p className="text-gray-300">
            Empowering neurodivergent children and families through community, resources, and inclusive events.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/ausomeheroes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-cosmic-coral transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/ausomeheroes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-cosmic-coral transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
            </li>
            <li>
              <Link to="/hero-spotlight" className="text-gray-300 hover:text-white transition-colors">Hero Spotlight</Link>
            </li>
          </ul>
        </div>

        {/* Local Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Local Services</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-cosmic-gold" />
              <Link to="/los-angeles" className="text-gray-300 hover:text-white transition-colors">
                Los Angeles Area
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ausome Heroes. 501(c)(3) Nonprofit. EIN: 93-3634596.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
