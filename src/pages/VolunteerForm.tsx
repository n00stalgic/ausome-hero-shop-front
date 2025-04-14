
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VolunteerForm from "@/components/volunteer/VolunteerForm";

const VolunteerFormPage = () => {
  return (
    <div className="min-h-screen bg-cosmic-navy">
      <Navbar />
      
      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cosmic-gold mb-4">
            Want to join a mission?
          </h1>
          <p className="text-lg text-cosmic-light max-w-2xl mx-auto">
            Become a part of something extraordinary. Los Angeles needs heroes like you
            to make a difference in our community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-cosmic-navy/30 backdrop-blur-lg rounded-xl p-8 border border-cosmic-purple/20 shadow-cosmic"
        >
          <VolunteerForm />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default VolunteerFormPage;
