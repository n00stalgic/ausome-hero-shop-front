
import { Link } from "react-router-dom";
import { BookOpen, Package, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferingsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-navy">
            Empowering Every Unique Mind
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of storytelling adventures, sensory products, and community events designed to celebrate every child's unique brilliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Storytelling & Characters */}
          <div className="bg-cosmic-navy/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-cosmic-purple/20 rounded-full flex items-center justify-center mb-5">
              <BookOpen className="text-cosmic-purple" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Storytelling & Characters</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Ausome Heroes Comic Series</li>
              <li>• Collectible Trading Cards</li>
              <li>• Interactive Games & Quizzes</li>
            </ul>
            <Link to="/products" className="text-cosmic-purple font-medium hover:underline">
              Explore Comics →
            </Link>
          </div>

          {/* Sensory Products */}
          <div className="bg-cosmic-navy/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-cosmic-coral/20 rounded-full flex items-center justify-center mb-5">
              <Package className="text-cosmic-coral" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Sensory Products</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Space Explorer Sensory Kits</li>
              <li>• Glow-in-the-Dark Pajamas</li>
              <li>• Hero Cape Kits</li>
            </ul>
            <Link to="/products" className="text-cosmic-coral font-medium hover:underline">
              Shop Products →
            </Link>
          </div>

          {/* Tools for Growth */}
          <div className="bg-cosmic-navy/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-cosmic-teal/20 rounded-full flex items-center justify-center mb-5">
              <Brain className="text-cosmic-teal" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Tools for Growth</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Ausome Daily Planner</li>
              <li>• Mindverse Activity Book</li>
              <li>• Parent Resource Guides</li>
            </ul>
            <Link to="/products" className="text-cosmic-teal font-medium hover:underline">
              View Resources →
            </Link>
          </div>

          {/* Community Events */}
          <div className="bg-cosmic-navy/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-cosmic-gold/20 rounded-full flex items-center justify-center mb-5">
              <Users className="text-cosmic-gold" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Community Events</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Sensory-Friendly Parties</li>
              <li>• Mindverse Adventure Days</li>
              <li>• Light Up the Galaxy Festival</li>
            </ul>
            <Link to="/los-angeles" className="text-cosmic-gold font-medium hover:underline">
              Join Events →
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-cosmic-navy hover:bg-cosmic-navy/80 text-white">
            <Link to="/about">Learn About Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
