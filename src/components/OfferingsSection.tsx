import { Link } from "react-router-dom";
import { BookOpen, BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";

const OfferingsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cosmic-light to-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-navy">
            The Ausome Heroes Universe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our suite of products, services, and resources designed to empower
            neurodivergent children and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Offering 1: Stories & Characters */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <div className="bg-cosmic-gold/10 p-4 rounded-lg inline-block mb-4">
                <BookOpen className="text-cosmic-gold w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-cosmic-navy">
                Stories & Characters
              </h3>

              <p className="text-gray-600 mb-4 flex-grow">
                Interactive comics, trading cards, and games that celebrate neurodiversity through adventure.
              </p>
            </div>
          </div>

          {/* Offering 2: Learning Tools */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <div className="bg-cosmic-purple/10 p-4 rounded-lg inline-block mb-4">
                <BrainCircuit className="text-cosmic-purple w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-cosmic-navy">
                Learning Tools
              </h3>

              <p className="text-gray-600 mb-4 flex-grow">
                Daily planners, activity books, and visual aids that make learning engaging and accessible.
              </p>
            </div>
          </div>

          {/* Offering 3: Sensory Products */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <div className="bg-cosmic-teal/10 p-4 rounded-lg inline-block mb-4">
                <Sparkles className="text-cosmic-teal w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-cosmic-navy">
                Sensory Products
              </h3>

              <p className="text-gray-600 mb-4 flex-grow">
                Space-themed sensory kits, comfort items, and wearables designed for sensory regulation and joy.
              </p>
            </div>
          </div>

          {/* Offering 4: Parent Resources */}
          <Link to="/about" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <div className="bg-cosmic-coral/10 p-4 rounded-lg inline-block mb-4">
                <ShieldCheck className="text-cosmic-coral w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-cosmic-navy group-hover:text-cosmic-coral transition-colors">
                Parent Resources
              </h3>

              <p className="text-gray-600 mb-4 flex-grow">
                Guides, affirmation cards, and community support to empower parents on their journey.
              </p>

              <span className="text-cosmic-coral font-medium inline-flex items-center">
                Get Support
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cosmic-purple/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-cosmic-gold/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-cosmic-coral/5 rounded-full -translate-y-1/2"></div>
    </section>
  );
};

export default OfferingsSection;
