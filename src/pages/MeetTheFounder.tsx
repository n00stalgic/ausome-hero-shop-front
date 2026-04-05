import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";
import { Heart, Users, Sparkles, Shield } from "lucide-react";

const MeetTheFounder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section with Galaxy Background */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <SvgBackgroundSection />
          </div>
          
          <div className="relative py-16 px-6 z-10">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold cosmic-shadow">
                Meet The Founder
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                A mother's journey to create inclusive spaces for neurodivergent children and families.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Founder Image */}
              <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/founder-allie.jpeg"
                    alt="Allie, Founder of Ausome Heroes, with her son"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Founder Bio */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-cosmic-navy">
                  Hi, I'm Allie
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  I'm the founder of Ausome Heroes, a nonprofit created from my lived experience as a mother to a neurodivergent child.
                </p>
                <p className="text-gray-700 mb-6">
                  After navigating therapy systems, school challenges, and limited community support, I recognized the need for safe, inclusive spaces where families could feel seen and supported. What began as a personal journey to create safe, joyful spaces for my son quickly became a mission to serve other families who were feeling overlooked, overwhelmed, and unheard.
                </p>
                <p className="text-gray-700">
                  I lead Ausome Heroes with a deep commitment to advocacy, accessibility, and community impact. My goal is to create spaces where neurodivergent children are celebrated, and families are never made to feel alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 bg-cosmic-navy/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cosmic-purple/20 mb-6">
                <Heart className="w-8 h-8 text-cosmic-purple" />
              </div>
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
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cosmic-navy">Our Foundation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cosmic-gold/20 mb-4">
                  <Shield className="w-7 h-7 text-cosmic-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Dignity</h3>
                <p className="text-gray-600">
                  Every child and family is treated with respect, recognizing their inherent worth and unique strengths.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cosmic-teal/20 mb-4">
                  <Users className="w-7 h-7 text-cosmic-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Equity</h3>
                <p className="text-gray-600">
                  We work to remove barriers and ensure all families have access to the support and resources they need.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cosmic-purple/20 mb-4">
                  <Sparkles className="w-7 h-7 text-cosmic-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-navy">Belonging</h3>
                <p className="text-gray-600">
                  Creating spaces where neurodivergent children and their families feel welcomed, accepted, and celebrated.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-cosmic-purple">
                At Ausome Heroes, inclusion is the foundation.
              </p>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default MeetTheFounder;
