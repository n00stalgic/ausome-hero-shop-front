import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

const values = [
  { icon: Heart, color: "text-hero", border: "border-hero", title: "Compassion", desc: "We approach our work with empathy and understanding for the diverse needs of autistic children and their families." },
  { icon: ShieldCheck, color: "text-hero-blue", border: "border-hero-blue", title: "Quality", desc: "We rigorously test and review every product to ensure it meets our high standards for safety, durability, and effectiveness." },
  { icon: Clock, color: "text-hero-orange", border: "border-hero-orange", title: "Accessibility", desc: "We strive to make our products and services accessible to all families, regardless of their circumstances." },
  { icon: Users, color: "text-green-500", border: "border-green-500", title: "Community", desc: "We believe in fostering a supportive community where families can connect, share experiences, and help each other." },
];

const ValuesSection = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="container mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8" stagger={0.1}>
        {values.map((v) => (
          <StaggerItem key={v.title}>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 191, 57, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className={`border-2 ${v.border} bg-white h-full`}>
                <CardContent className="p-6 text-center">
                  <v.icon className={`mx-auto ${v.color} mb-4`} size={48} />
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-600">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
);

export default ValuesSection;
