import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const Testimonial = () => (
  <section className="py-16 px-6 bg-white">
    <div className="container mx-auto max-w-3xl text-center">
      <FadeIn>
        <motion.blockquote
          className="relative"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-6xl text-cosmic-gold/30 font-serif absolute -top-4 -left-4">"</span>
          <p className="text-2xl md:text-3xl font-medium text-cosmic-navy leading-relaxed italic px-8">
            For the first time, my son walked into an event and nobody stared. He just got to be a kid.
          </p>
          <span className="text-6xl text-cosmic-gold/30 font-serif absolute -bottom-10 right-0">"</span>
        </motion.blockquote>
        <p className="mt-8 text-gray-500 font-medium">Parent at Ausome Heroes Community Event</p>
      </FadeIn>
    </div>
  </section>
);

export default Testimonial;
