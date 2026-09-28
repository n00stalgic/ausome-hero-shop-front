import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const FounderSection = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <FadeIn direction="left" className="flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/lovable-uploads/founder-allie.webp"
              alt="Allie, Founder of Ausome Heroes, with her son"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15} className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-cosmic-navy">Hi, I'm Allie</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm the founder of Ausome Heroes, a nonprofit created from my lived experience as a mother to a neurodivergent child.
          </p>
          <p className="text-gray-700 mb-6">
            I launched Ausome Heroes in 2023 after struggling to find sensory-friendly resources for my autistic son, Kadence — a playful 5-year-old whose needs inspired every detail. After navigating therapy systems, school challenges, and limited community support, I recognized the need for safe, inclusive spaces where families could feel seen and supported.
          </p>
          <p className="text-gray-700 mb-6">
            What began as a personal journey quickly became a mission to serve other families who were feeling overlooked, overwhelmed, and unheard. Our superhero theme reflects Kadence's resilience and creativity — traits I see in every autistic child.
          </p>
          <p className="text-gray-700">
            Today, Ausome Heroes is a community hub where parents and professionals share resources and celebrate neurodiverse joy. My goal is to create spaces where neurodivergent children are celebrated, and families are never made to feel alone.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.25} className="mt-12 max-w-2xl mx-auto">
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/lovable-uploads/f2d84322-71e9-4ca8-8dc3-fb8c4c3255cd.webp"
            alt="Kadence the Harmonizer"
            className="w-full h-auto"
          />
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

export default FounderSection;
