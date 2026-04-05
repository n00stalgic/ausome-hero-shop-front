
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/about/MissionSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import AusomeGalaxySection from "@/components/about/AusomeGalaxySection";
import CommitmentSection from "@/components/about/CommitmentSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section with Galaxy Background */}
        <MissionSection />
        
        {/* Our Story */}
        <StorySection />
        
        {/* Our Values */}
        <ValuesSection />
        
        {/* The Ausome Galaxy */}
        <AusomeGalaxySection />
        
        {/* Our Commitment */}
        <CommitmentSection />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
