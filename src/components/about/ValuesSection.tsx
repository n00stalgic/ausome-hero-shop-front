
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShieldCheck, Clock, Users } from "lucide-react";

const ValuesSection = () => {
  return (
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
  );
};

export default ValuesSection;
