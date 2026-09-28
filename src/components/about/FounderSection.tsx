import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const FounderSection = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <FadeIn direction="left" className="flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 mb-8">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="absolute -inset-4 rounded-t-full rounded-b-[2.5rem] rotate-2"
              style={{
                background:
                  "linear-gradient(160deg, #1a1e3a 0%, #32246b 55%, #8a4fbc 130%)",
              }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[2.5rem]">
                <div className="stars-small opacity-80" />
              </div>
            </div>

            <span className="absolute -top-3 -right-2 z-10 text-2xl text-cosmic-gold animate-twinkle" aria-hidden="true">✦</span>
            <span className="absolute top-1/3 -left-6 z-10 text-xl text-cosmic-coral animate-twinkle-delayed" aria-hidden="true">✦</span>
            <span className="absolute bottom-16 -right-5 z-10 text-lg text-cosmic-gold/80 animate-twinkle" aria-hidden="true">✦</span>

            <div className="relative rounded-t-full rounded-b-[2rem] overflow-hidden ring-4 ring-cosmic-gold/70 shadow-2xl shadow-cosmic-purple/30">
              <img
                src="/lovable-uploads/founder-allie.webp"
                alt="Allie, Founder of Ausome Heroes, with her son"
                className="w-full aspect-[5/6] object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1a1e3a]/70 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cosmic-navy px-5 py-2 text-sm font-bold text-cosmic-gold shadow-lg ring-1 ring-cosmic-gold/50">
              Allie with her son Kadence
            </div>
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
