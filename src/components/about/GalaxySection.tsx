import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FadeIn from "@/components/motion/FadeIn";

const GalaxySection = () => (
  <section className="py-16 px-6 bg-cosmic-dark overflow-hidden">
    <div className="container mx-auto">
      <FadeIn className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">The Ausome Galaxy</h2>
        <p className="text-cosmic-light max-w-3xl mx-auto">
          Every Mind is a Universe — At Ausome Heroes, we celebrate the unique
          ways our children see and experience the world through our Ausome
          Galaxy universe and characters.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="left">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <AspectRatio ratio={3 / 4} className="rounded-lg overflow-hidden shadow-cosmic">
              <img
                src="/lovable-uploads/80cd1771-545d-45b5-b9ff-f0f12458d536.png"
                alt="Ausome Superhero Squad — Children with different abilities and superpowers"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </motion.div>
        </FadeIn>

        <div className="text-white space-y-8">
          <FadeIn direction="right" delay={0.1}>
            <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Meet Our Heroes</h3>
            <p className="text-cosmic-light">
              The Ausome Hero Squad features characters like Nova, Zeke the Zoomer,
              Cosmo, and Kadence the Harmonizer — each representing different strengths
              and abilities that children on the spectrum may identify with.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Educational Support</h3>
            <p className="text-cosmic-light">
              Our products include educational materials, sensory tools, and comfort
              items that help children navigate their daily adventures while celebrating
              their unique superpowers.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Community Mission</h3>
            <p className="text-cosmic-light">
              Through initiatives like "Sponsor a Star," we're building a supportive
              community that empowers autistic children to shine bright in their own way.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default GalaxySection;
