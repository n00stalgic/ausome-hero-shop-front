import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/about/FounderSection";
import ValuesSection from "@/components/about/ValuesSection";
import GalaxySection from "@/components/about/GalaxySection";
import { usePageTitle } from "@/hooks/usePageTitle";

const About = () => {
  usePageTitle("About Us");
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero banner */}
        <section
          className="relative py-16 px-6 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 50%, rgba(138,79,188,0.4) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 40%, rgba(79,151,199,0.3) 0%, transparent 55%),
              linear-gradient(180deg, #121638 0%, #1A1E3A 50%, #32246B 100%)
            `,
          }}
        >
          <div className="absolute inset-0">
            <div className="stars-small" />
            <div className="stars-medium" />
          </div>
          <div className="relative z-10 container mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold cosmic-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About Ausome Heroes
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe that every child deserves to feel like a hero in their own story.
            </motion.p>

            <motion.img
              src="/lovable-uploads/aboutk.png"
              alt="About Ausome Heroes"
              className="max-w-3xl w-full mx-auto rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>
        </section>

        <FounderSection />
        <ValuesSection />
        <GalaxySection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
