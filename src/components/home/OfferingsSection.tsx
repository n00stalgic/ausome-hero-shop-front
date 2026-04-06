import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

const offerings = [
  {
    icon: BookOpen,
    color: "cosmic-gold",
    title: "Stories & Characters",
    desc: "Interactive comics, trading cards, and games that celebrate neurodiversity through adventure.",
  },
  {
    icon: BrainCircuit,
    color: "cosmic-purple",
    title: "Learning Tools",
    desc: "Daily planners, activity books, and visual aids that make learning engaging and accessible.",
  },
  {
    icon: Sparkles,
    color: "cosmic-teal",
    title: "Sensory Products",
    desc: "Space-themed sensory kits, comfort items, and wearables designed for sensory regulation and joy.",
  },
];

const OfferingsSection = () => (
  <section className="py-20 bg-gradient-to-b from-cosmic-light to-white overflow-hidden relative">
    <div className="container mx-auto px-6">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-navy">
          The Ausome Heroes Universe
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our suite of products, services, and resources designed to empower
          neurodivergent children and their families.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" stagger={0.12}>
        {offerings.map((o) => (
          <StaggerItem key={o.title}>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col border border-gray-100"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`bg-${o.color}/10 p-4 rounded-lg inline-block mb-4`}>
                <o.icon className={`text-${o.color} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-cosmic-navy">{o.title}</h3>
              <p className="text-gray-600 flex-grow">{o.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}

        <StaggerItem>
          <Link to="/about" className="group block h-full">
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col border border-gray-100"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
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
            </motion.div>
          </Link>
        </StaggerItem>
      </StaggerChildren>
    </div>
  </section>
);

export default OfferingsSection;
