import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/motion/FadeIn";

const NominateCtaBanner = () => (
  <section
    className="relative py-20 px-6 overflow-hidden"
    style={{
      background: `
        radial-gradient(ellipse 60% 60% at 80% 50%, rgba(255,191,57,0.15) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 20% 50%, rgba(138,79,188,0.1) 0%, transparent 50%),
        linear-gradient(180deg, #f8f7ff 0%, #f0eef8 100%)
      `,
    }}
  >
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Illustration placeholder */}
        <FadeIn direction="left" className="md:w-1/3 flex justify-center">
          <motion.div
            className="w-64 h-64 rounded-2xl border-2 border-dashed border-cosmic-gold/30 bg-cosmic-gold/5 flex flex-col items-center justify-center text-cosmic-navy/30 p-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-12 h-12 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <p className="text-xs font-medium tracking-wide uppercase">Hero Spotlight Badge</p>
            <p className="text-xs mt-1 opacity-60">512 x 512</p>
          </motion.div>
        </FadeIn>

        {/* Copy */}
        <FadeIn direction="right" delay={0.15} className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-cosmic-navy">
            Nominate Your Ausome Hero
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Do you know an autistic child or young adult who inspires others through their bravery, creativity, or growth? Help us celebrate their unique story by nominating them for our Hero Spotlight!
          </p>
          <Link to="/hero-spotlight">
            <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8">
              Nominate a Hero
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default NominateCtaBanner;
