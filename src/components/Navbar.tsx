
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-cosmic-navy">Ausome</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFBF39] to-[#4F97C7]">
              Heroes
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-cosmic-navy hover:text-cosmic-coral transition-colors font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-cosmic-navy hover:text-cosmic-coral transition-colors font-bold"
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-cosmic-navy hover:text-cosmic-coral transition-colors font-bold"
          >
            Products
          </Link>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-cosmic-purple border-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-navy font-bold"
          >
            <ShoppingCart size={18} />
            <span>Cart (0)</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-cosmic-navy hover:text-cosmic-coral transition-colors py-2 font-bold"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-cosmic-navy hover:text-cosmic-coral transition-colors py-2 font-bold"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-cosmic-navy hover:text-cosmic-coral transition-colors py-2 font-bold"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 text-cosmic-purple border-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-navy w-full font-bold"
              onClick={toggleMenu}
            >
              <ShoppingCart size={18} />
              <span>Cart (0)</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
