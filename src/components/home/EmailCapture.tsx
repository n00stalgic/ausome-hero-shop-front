import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FadeIn from "@/components/motion/FadeIn";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email });
      if (error) throw error;
      toast.success("Welcome to the Galaxy!", {
        description: "You'll hear from us soon with updates and resources.",
        duration: 5000,
      });
      setEmail("");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or reach out on social media.",
        duration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 30% 50%, rgba(138,79,188,0.3) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 70% 40%, rgba(79,151,199,0.2) 0%, transparent 50%),
          linear-gradient(180deg, #1A1E3A 0%, #32246B 100%)
        `,
      }}
    >
      <div className="absolute inset-0">
        <div className="stars-small" />
        <div className="stars-medium" />
      </div>

      <div className="relative z-10 container mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Galaxy
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Monthly updates on events, resources, and hero spotlights — straight to your inbox.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8 whitespace-nowrap"
            >
              {submitting ? "Joining..." : "Join Us"}
            </Button>
          </form>
          <p className="text-white/40 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default EmailCapture;
