import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DonateButton from "@/components/forms/DonateButton";

const HeroSection = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: `
        radial-gradient(ellipse 80% 60% at 20% 40%, rgba(138,79,188,0.4) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 75% 30%, rgba(79,151,199,0.35) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 50% 80%, rgba(255,140,66,0.2) 0%, transparent 50%),
        linear-gradient(180deg, #121638 0%, #1A1E3A 40%, #32246B 100%)
      `,
    }}
  >
    {/* Star field */}
    <div className="absolute inset-0">
      <div className="stars-small" />
      <div className="stars-medium" />
      <div className="stars-large" />
    </div>

    <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="max-w-2xl lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every Child Deserves To Be A{" "}
            <motion.span
              className="text-cosmic-gold inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              Hero
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Empowering autistic children and their families through community,
            resources, and events that inspire confidence and bring joy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/15 text-white hover:bg-white/25 font-bold text-lg px-8 py-6"
              >
                Our Mission
              </Button>
            </Link>
            <DonateButton variant="gold" size="lg" className="font-bold text-lg px-8 py-6" />
          </motion.div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="/lovable-uploads/ausomeheroes.png"
            alt="Ausome Heroes — empowering neurodivergent children"
            className="w-full max-w-2xl drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
