import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, HandHelping, Star } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import DonateButton from "@/components/forms/DonateButton";

const ways = [
  {
    icon: Heart,
    color: "cosmic-gold",
    title: "Donate",
    desc: "Your contribution directly funds sensory-friendly events, family resources, and community programs across Los Angeles.",
    cta: "donate",
  },
  {
    icon: HandHelping,
    color: "cosmic-purple",
    title: "Volunteer",
    desc: "Join our team of heroes. Help with events, outreach, and creating inclusive spaces for neurodivergent families.",
    cta: "/volunteer",
  },
  {
    icon: Star,
    color: "cosmic-coral",
    title: "Nominate a Hero",
    desc: "Know an autistic child or young adult who inspires others? Help us celebrate their unique story.",
    cta: "/hero-spotlight",
  },
];

const WaysToHelp = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto">
      <FadeIn className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-navy mb-4">
          Ways to Help
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every action matters. Here's how you can be part of the mission.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" stagger={0.12}>
        {ways.map((w) => (
          <StaggerItem key={w.title}>
            <motion.div
              className={`relative rounded-2xl p-8 h-full flex flex-col items-center text-center border-2 border-${w.color}/20 bg-white`}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`w-16 h-16 rounded-full bg-${w.color}/10 flex items-center justify-center mb-6`}>
                <w.icon className={`w-8 h-8 text-${w.color}`} />
              </div>
              <h3 className="text-xl font-bold text-cosmic-navy mb-3">{w.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{w.desc}</p>
              {w.cta === "donate" ? (
                <DonateButton variant="gold" className="w-full font-semibold" />
              ) : (
                <Link to={w.cta} className="w-full">
                  <motion.button
                    className={`w-full py-2 px-6 rounded-md font-semibold border-2 border-${w.color} text-${w.color} hover:bg-${w.color}/10 transition-colors`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Involved
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
);

export default WaysToHelp;
