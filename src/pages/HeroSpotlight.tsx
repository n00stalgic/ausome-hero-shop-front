
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightForm from "@/components/forms/spotlight/SpotlightForm";
import { usePageTitle } from "@/hooks/usePageTitle";

const HeroSpotlight = () => {
  usePageTitle("Nominate an Ausome Hero");
  return (
    <div className="min-h-screen bg-cosmic-navy">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 md:pt-36 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cosmic-gold mb-4">
            Nominate Your Ausome Hero
          </h1>
          <p className="text-lg text-cosmic-light max-w-2xl mx-auto">
            Help us celebrate the everyday superheroes in the Mindverse! Nominate an autistic child
            or young adult who inspires others through their bravery, creativity, or growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cosmic-navy/30 backdrop-blur-lg rounded-xl p-8 border border-cosmic-purple/20 shadow-cosmic"
        >
          <SpotlightForm />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default HeroSpotlight;
