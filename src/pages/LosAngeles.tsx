import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, MapPin, Users, PartyPopper, Heart } from "lucide-react";
import SvgBackgroundSection from "@/components/SvgBackgroundSection";
import DonateButton from '@/components/DonateButton';
import { usePageTitle } from "@/hooks/usePageTitle";

const LosAngeles = () => {
  usePageTitle("Los Angeles Events & Programs");
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative bg-cosmic-navy text-white">
        <SvgBackgroundSection />
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold cosmic-shadow">
              Ausome Heroes in Los Angeles
            </h1>
            <p className="text-xl text-white mb-8">
              Join our inclusive community events for neurodivergent children and families across Los Angeles.
            </p>

            {/* Donation Button Section with Instructions */}
            <div className="flex flex-col items-center mb-6">
              <DonateButton variant="blue" size="lg" text="Support Our LA Programs" />
              <p className="text-sm text-white/80 text-center italic mt-2">
                Click "Support Our LA Programs" to open our secure donation form
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Section - Moved above Community Events */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cosmic-purple/10 to-cosmic-navy/10 rounded-xl p-8 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Become an Ausome Hero Volunteer</h3>
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-cosmic-purple mr-2" size={24} />
              <span className="text-lg text-cosmic-navy">Make a difference in our Los Angeles community</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're looking for passionate volunteers to help with our events, programs, and community outreach. Join our team of heroes and make a real impact in the lives of neurodivergent children and their families.
            </p>
            <Link to="/volunteer">
              <Button className="bg-cosmic-purple hover:bg-cosmic-purple/80 text-white font-semibold px-8">
                Volunteer Application
              </Button>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">Community Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Superhero Parties */}
            <div className="bg-cosmic-navy/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-cosmic-purple to-cosmic-navy flex items-center justify-center">
                <PartyPopper className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sensory-Friendly Superhero Parties</h3>
                <p className="text-gray-600 mb-4">
                  Join us for inclusive, sensory-friendly superhero parties designed for neurodivergent children and their families. Every child gets to be the hero of their own story!
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>Various locations across Los Angeles</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays size={16} className="mr-2" />
                  <span>Monthly events - check calendar for details</span>
                </div>
              </div>
            </div>

            {/* Mindverse Adventure Days */}
            <div className="bg-cosmic-navy/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-cosmic-teal to-cosmic-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path>
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
                  <path d="M12 10a2 2 0 0 1 2 2c0 1.02-.1 2.51-.26 4"></path>
                  <path d="M11 14.1c-.5.2-2.5 1-2.5 2.4 0 1.37 1.1 2.5 2.5 2.5s2.5-1.13 2.5-2.5c0-1.4-1.97-2.2-2.5-2.4z"></path>
                  <path d="M22 12c0 5.5-4.5 10-10 10"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Mindverse Adventure Days</h3>
                <p className="text-gray-600 mb-4">
                  Experience our outdoor sensory fairs designed for exploration, fun, and learning. These exciting adventures help children connect with their environment in a safe, supportive setting.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>Parks and outdoor spaces in Los Angeles</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays size={16} className="mr-2" />
                  <span>Quarterly events - Spring, Summer, Fall, Winter</span>
                </div>
              </div>
            </div>

            {/* Light Up the Galaxy Festival */}
            <div className="bg-cosmic-navy/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-cosmic-gold to-cosmic-coral flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  <path d="M19 3v4"></path>
                  <path d="M21 5h-4"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Light Up the Galaxy Festival</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual celebration during Autism Acceptance Month in April. This festival brings together families, resources, and fun activities to celebrate neurodiversity.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>Grand Park, Los Angeles</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays size={16} className="mr-2" />
                  <span>April (Autism Acceptance Month)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Spotlight Section */}
          <div className="bg-gradient-to-r from-cosmic-gold/10 to-cosmic-coral/10 rounded-xl p-8 text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Nominate an Ausome Hero</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Know an inspiring autistic child or young adult in Los Angeles? Help us celebrate their unique story and achievements by nominating them for our Hero Spotlight!
            </p>
            <Link to="/hero-spotlight">
              <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8">
                Nominate a Hero
              </Button>
            </Link>
          </div>

          {/* Focus Areas Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Los Angeles Focus Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
              {['Pasadena', 'Inglewood', 'Compton', 'Long Beach', 'South LA'].map((area) => (
                <div key={area} className="bg-cosmic-navy/5 py-3 px-6 rounded-full text-center">
                  <span className="font-medium text-cosmic-navy">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LosAngeles;
