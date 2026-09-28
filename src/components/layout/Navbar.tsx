import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed w-full z-50 px-6"
      style={{
        background: `
          radial-gradient(ellipse 60% 90% at 15% 50%, rgba(138,79,188,0.35) 0%, transparent 60%),
          radial-gradient(ellipse 50% 80% at 85% 40%, rgba(79,151,199,0.28) 0%, transparent 55%),
          linear-gradient(180deg, #0d1230 0%, #1a1e3a 100%)
        `,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="stars-small opacity-70" />
      </div>
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative container mx-auto flex justify-between items-center">
        <Link
          to="/"
          aria-label="Ausome Heroes home"
          className="group flex items-center gap-2.5 h-20 md:h-24 shrink-0 mr-4 md:mr-8"
        >
          <img
            src="/lovable-uploads/ausome-nav-emblem.png"
            alt=""
            className="h-11 md:h-[52px] w-auto transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3"
          />
          <span className="font-logo text-[22px] md:text-[26px] font-extrabold leading-none tracking-tight whitespace-nowrap">
            <span className="text-white">Ausome</span>{" "}
            <span className="text-cosmic-gold">Heroes</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`group relative font-bold transition-colors duration-200 ${
                  active ? "text-cosmic-gold" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-[#ffe9a8] via-cosmic-gold to-[#e08a1e] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <DonateButton
            variant="gold"
            size="sm"
            className="btn-shine font-semibold px-6 shadow-lg shadow-cosmic-gold/40 hover:shadow-cosmic-gold/60 hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 z-50 animate-slide-down"
          style={{
            background: `
              radial-gradient(ellipse 70% 100% at 20% 0%, rgba(138,79,188,0.4) 0%, transparent 60%),
              linear-gradient(180deg, #141a3d 0%, #0d1230 100%)
            `,
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="stars-small opacity-60" />
          </div>
          <div className="relative flex flex-col space-y-1 py-4 px-6 border-t border-cosmic-gold/20">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`font-bold py-3 px-2 rounded-lg transition-colors ${
                    active
                      ? "text-cosmic-gold bg-white/5"
                      : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-2 pb-2">
              <DonateButton variant="gold" className="btn-shine w-full font-semibold" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
