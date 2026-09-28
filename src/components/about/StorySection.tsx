import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const StorySection = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mb-12 max-w-2xl mx-auto">
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

      <FadeIn delay={0.2} className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-4">
          I launched Ausome Heroes in 2023 after struggling to find sensory-friendly products for my autistic son,
          Kadence, a playful 5-year-old whose needs inspired every detail. What started as a quest for softer
          clothes and calmer toys grew into a shop curated with therapists, offering items that empower kids like him.
        </p>
        <p className="text-gray-700 mb-4">
          Our superhero theme reflects Kadence's resilience and creativity—traits I see in every autistic child.
          Today, we're a community hub where parents and professionals share resources and celebrate neurodiverse joy.
          Kadence taught me that "different" is brilliant, and our mission is simple: help kids embrace their strengths,
          one sensory swing or communication card at a time.
        </p>
        <p className="text-gray-700">
          This isn't just a store—it's our way of cheering on the superhero in every child.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default StorySection;
