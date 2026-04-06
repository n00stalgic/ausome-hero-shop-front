import FadeIn from "@/components/motion/FadeIn";

const MissionSection = () => (
  <section className="py-16 px-6 bg-cosmic-navy/5">
    <div className="container mx-auto">
      <FadeIn className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-cosmic-navy">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ausome Heroes exists to empower neurodivergent children and their families by creating inclusive, sensory-friendly experiences, accessible resources, and community-driven support.
        </p>
        <p className="text-gray-700 mb-6">
          We are committed to breaking down barriers that prevent families from accessing safe spaces, meaningful connection, and the tools they need to thrive. Through events, education, advocacy, and partnerships, we work to build a world where neurodivergent children are supported and celebrated.
        </p>
        <p className="text-gray-700">
          Our mission is rooted in dignity, equity, and belonging. We believe every child deserves to feel seen, valued, and capable, and every family deserves to feel supported, not alone.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default MissionSection;
