import { Heart, Calendar, Users } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import CountUp from "@/components/motion/CountUp";

const stats = [
  { number: "150+", label: "Families Served", icon: Heart },
  { number: "25+", label: "Events Hosted", icon: Calendar },
  { number: "50+", label: "Volunteers", icon: Users },
];

const ImpactSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cosmic-navy mb-4">
          Our Impact So Far
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Every number represents a family who felt seen, a child who felt celebrated, a volunteer who showed up.
        </p>
      </FadeIn>
      <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center" stagger={0.15}>
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cosmic-gold/10 flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-cosmic-gold" />
              </div>
              <CountUp
                target={s.number}
                className="text-4xl md:text-5xl font-bold text-cosmic-gold mb-2 block"
              />
              <p className="text-gray-600 font-medium">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
);

export default ImpactSection;
