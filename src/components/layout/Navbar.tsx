import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DonateButton from "@/components/forms/DonateButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/los-angeles", label: "LA Events" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="relative h-16 md:h-24 overflow-hidden flex items-start shrink-0 mr-4 md:mr-8">
          <img
            src="/lovable-uploads/ausomelogo.png"
            alt="Ausome Heroes"
            className="h-40 md:h-52 w-auto -mt-4 md:-mt-10"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-cosmic-navy hover:text-cosmic-coral transition-colors font-bold"
            >
              {l.label}
            </Link>
          ))}
          <DonateButton variant="gold" size="sm" className="font-semibold px-6" />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-cosmic-navy hover:text-cosmic-coral transition-colors py-2 font-bold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <DonateButton variant="gold" className="w-full font-semibold" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
