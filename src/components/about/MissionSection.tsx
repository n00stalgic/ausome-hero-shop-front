
import SvgBackgroundSection from "@/components/SvgBackgroundSection";

const MissionSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full">
          <SvgBackgroundSection />
        </div>
      </div>
      
      <div className="relative py-16 px-6 z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white cosmic-shadow">Our Mission</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We believe that every child deserves to feel like a hero in their own story.
            AusomeHero's was created to empower autistic children with products that
            inspire joy, comfort, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
