
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionSection from "@/components/SubscriptionSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-hero-gradient">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe that every child deserves to feel like a hero in their own story.
              AusomeHero's was created to empower autistic children with products that
              inspire joy, comfort, and confidence.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://placehold.co/600x400/9b87f5/FFFFFF/png?text=Our+Story"
                  alt="Our story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  AusomeHero's was founded in 2023 by parents who understand the unique 
                  challenges and joys of raising autistic children. After struggling to 
                  find products that truly met their children's needs, they decided to 
                  create a store that would offer carefully curated items specifically 
                  designed for children on the autism spectrum.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small passion project has grown into a community 
                  of parents, educators, and therapists who share a common goal: 
                  to help autistic children thrive and feel empowered.
                </p>
                <p className="text-gray-700">
                  Our superhero theme represents the incredible strength, unique 
                  abilities, and special perspectives that autistic children bring 
                  to the world. Every child has their own superpowers, and we're 
                  here to celebrate them!
                </p>
              </div>
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
