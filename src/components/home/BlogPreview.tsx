import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const BlogPreview = () => (
  <section className="py-16 px-6 bg-cosmic-navy/5">
    <div className="container mx-auto max-w-4xl">
      <FadeIn>
        <h2 className="text-2xl font-bold text-cosmic-navy mb-8 text-center">From the Founder</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Link to="/blog/apple-del-amo-workshop-2025">
          <motion.div
            className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md group"
            whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="md:w-1/3">
              <img
                src="/lovable-uploads/apple-del-amo-cover.svg"
                alt="Apple Del Amo Workshop"
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4" />
                January 2025
              </div>
              <h3 className="text-xl font-bold text-cosmic-navy mb-2 group-hover:text-cosmic-purple transition-colors">
                A Morning of Magic at Apple Del Amo
              </h3>
              <p className="text-gray-600 mb-4">
                We spent the morning at Apple Del Amo with our Ausome Heroes, exploring creativity and technology together. Here's what the kids took away from it, and why it mattered.
              </p>
              <span className="inline-flex items-center gap-1 text-cosmic-purple font-medium">
                Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </Link>
      </FadeIn>
    </div>
  </section>
);

export default BlogPreview;
