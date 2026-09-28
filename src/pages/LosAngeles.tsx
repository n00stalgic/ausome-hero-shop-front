import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonateButton from "@/components/forms/DonateButton";
import { usePageTitle } from "@/hooks/usePageTitle";

const programs = [
  {
    title: "Sensory-Friendly Superhero Parties",
    desc: "Inclusive, sensory-friendly superhero parties designed for neurodivergent children and their families. Every child gets to be the hero of their own story!",
    location: "Various locations across Los Angeles",
    schedule: "Monthly events. Check the calendar for details",
    image: "/lovable-uploads/k1.webp",
  },
  {
    title: "Mindverse Adventure Days",
    desc: "Outdoor sensory fairs designed for exploration, fun, and learning. These adventures help children connect with their environment in a safe, supportive setting.",
    location: "Parks and outdoor spaces in Los Angeles",
    schedule: "Quarterly: Spring, Summer, Fall, Winter",
    image: "/lovable-uploads/k2.webp",
  },
  {
    title: "Light Up the Galaxy Festival",
    desc: "Our annual celebration during Autism Acceptance Month. This festival brings together families, resources, and fun activities to celebrate neurodiversity.",
    location: "Grand Park, Los Angeles",
    schedule: "April (Autism Acceptance Month)",
    image: "/lovable-uploads/k3.webp",
  },
];

const LosAngeles = () => {
  usePageTitle("Los Angeles Events & Programs");
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-white"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 40% 50%, rgba(138,79,188,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 30%, rgba(79,151,199,0.3) 0%, transparent 50%),
            linear-gradient(180deg, #121638 0%, #1A1E3A 60%, #32246B 100%)
          `,
        }}
      >
        <div className="absolute inset-0">
          <div className="stars-small" />
          <div className="stars-medium" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold cosmic-shadow">
            Ausome Heroes in Los Angeles
          </h1>
          <p className="text-xl text-white mb-8">
            Join our inclusive community events for neurodivergent children and families across Los Angeles.
          </p>
          <DonateButton variant="blue" size="lg" text="Support Our LA Programs" />
        </div>
      </section>

      {/* Volunteer CTA + Events */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cosmic-purple/10 to-cosmic-navy/10 rounded-xl p-8 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Become an Ausome Hero Volunteer</h3>
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-cosmic-purple mr-2" size={24} />
              <span className="text-lg text-cosmic-navy">Make a difference in our Los Angeles community</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're looking for passionate volunteers to help with our events, programs, and community outreach. Join our team of heroes and make a real impact in the lives of neurodivergent children and their families.
            </p>
            <Link to="/volunteer">
              <Button className="bg-cosmic-purple hover:bg-cosmic-purple/80 text-white font-semibold px-8">
                Volunteer Application
              </Button>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">Community Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div key={p.title} className="bg-cosmic-navy/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.desc}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin size={16} className="mr-2 shrink-0" />
                    <span>{p.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays size={16} className="mr-2 shrink-0" />
                    <span>{p.schedule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nominate CTA */}
          <div className="mt-16 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-coral/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Nominate an Ausome Hero</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Know an inspiring autistic child or young adult in Los Angeles? Help us celebrate their unique story and achievements by nominating them for our Hero Spotlight!
            </p>
            <Link to="/hero-spotlight">
              <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8">
                Nominate a Hero
              </Button>
            </Link>
          </div>

          {/* Focus Areas */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Los Angeles Focus Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
              {["Pasadena", "Inglewood", "Compton", "Long Beach", "South LA"].map((area) => (
                <div key={area} className="bg-cosmic-navy/5 py-3 px-6 rounded-full text-center">
                  <span className="font-medium text-cosmic-navy">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LosAngeles;
