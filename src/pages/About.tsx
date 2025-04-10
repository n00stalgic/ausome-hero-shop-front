
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionSection from "@/components/SubscriptionSection";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section with Galaxy Background */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            {/* Using the SvgBackgroundSection as a background */}
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
        
        {/* Our Story */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
            
            {/* Image display above the text content */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/f2d84322-71e9-4ca8-8dc3-fb8c4c3255cd.png"
                  alt="Kadence the Harmonizer"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-4">
                I launched AusomeHero's in 2023 after struggling to find sensory-friendly products for my autistic son, 
                Kadence, a playful 5-year-old whose needs inspired every detail. What started as a quest for softer 
                clothes and calmer toys grew into a shop curated with therapists, offering items that empower kids like him.
              </p>
              <p className="text-gray-700 mb-4">
                Our superhero theme reflects Kadence's resilience and creativity—traits I see in every autistic child. 
                Today, we're a community hub where parents and professionals share resources and celebrate neurodiverse joy. 
                Kadence taught me that "different" is brilliant, and our mission is simple: help kids embrace their strengths, 
                one sensory swing or communication card at a time.
              </p>
              <p className="text-gray-700">
                This isn't just a store—it's our way of cheering on the superhero in every child.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <Card className="hero-card border-2 border-hero bg-white">
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto text-hero mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Compassion</h3>
                  <p className="text-gray-600">
                    We approach our work with empathy and understanding for the diverse 
                    needs of autistic children and their families.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card border-2 border-hero-blue bg-white">
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="mx-auto text-hero-blue mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We rigorously test and review every product to ensure it meets our 
                    high standards for safety, durability, and effectiveness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card border-2 border-hero-orange bg-white">
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto text-hero-orange mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    We strive to make our products and services accessible to all 
                    families, regardless of their circumstances.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card border-2 border-green-500 bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-600">
                    We believe in fostering a supportive community where families can 
                    connect, share experiences, and help each other.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* The Ausome Galaxy */}
        <section className="py-16 px-6 bg-cosmic-dark">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">The Ausome Galaxy</h2>
              <p className="text-cosmic-light max-w-3xl mx-auto">
                Every Mind is a Universe - At AusomeHero's, we celebrate the unique 
                ways our children see and experience the world through our Ausome 
                Galaxy universe and characters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AspectRatio ratio={3/4} className="rounded-lg overflow-hidden shadow-cosmic">
                  <img
                    src="/lovable-uploads/c560313e-9a17-4ebd-aea6-f028b54dd5ec.png"
                    alt="Ausome Galaxy - Every Mind is a Universe"
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Meet Our Heroes</h3>
                <p className="mb-4 text-cosmic-light">
                  The Ausome Hero Squad features characters like Nova, Zeke the Zoomer, 
                  Cosmo, and Kadence the Harmonizer - each representing different strengths 
                  and abilities that children on the spectrum may identify with.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Educational Support</h3>
                <p className="mb-4 text-cosmic-light">
                  Our products include educational materials, sensory tools, and comfort 
                  items that help children navigate their daily adventures while celebrating 
                  their unique superpowers.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-cosmic-gold">Community Mission</h3>
                <p className="text-cosmic-light">
                  Through initiatives like "Sponsor a Star," we're building a supportive 
                  community that empowers autistic children to shine bright in their own way.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Commitment */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                At AusomeHero's, we're committed to continuous learning and improvement. 
                We actively seek input from autistic individuals, parents, and 
                professionals to ensure our product selection truly meets the needs 
                of the children we serve.
              </p>
              <p className="text-gray-700 mb-4">
                We donate 5% of our profits to organizations that support autism 
                research, education, and advocacy, because we believe in giving back 
                to the community that inspires our work every day.
              </p>
              <p className="text-gray-700">
                Thank you for joining us on this journey. Together, we can help every 
                child discover their inner hero and shine their unique light on the world.
              </p>
            </div>
          </div>
        </section>
        
        <SubscriptionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
