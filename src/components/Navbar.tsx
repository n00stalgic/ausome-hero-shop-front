
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
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-hero to-hero-blue">
            AusomeHeroes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-hero-dark hover:text-hero transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-hero-dark hover:text-hero transition-colors"
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-hero-dark hover:text-hero transition-colors"
          >
            Products
          </Link>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-hero border-hero hover:bg-hero hover:text-white"
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
              className="text-hero-dark hover:text-hero transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-hero-dark hover:text-hero transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-hero-dark hover:text-hero transition-colors py-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 text-hero border-hero hover:bg-hero hover:text-white w-full"
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
