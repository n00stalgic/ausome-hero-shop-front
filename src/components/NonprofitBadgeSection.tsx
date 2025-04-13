
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NonprofitBadgeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 max-w-xs">
            <img 
              src="/lovable-uploads/8dfe57a3-5d31-4698-bdeb-e64137674ff5.png" 
              alt="Ausome Heroes 501(c)(3) Nonprofit Badge" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-cosmic-navy">
              Every Mind is a Universe
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Ausome Heroes, we're on a mission to help every neurodivergent child recognize their unique brilliance, and every parent feel empowered as the hero of their child's galaxy.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As a 501(c)(3) nonprofit organization, we're dedicated to creating inclusive resources, events, and communities that celebrate neurodiversity and empower families.
            </p>
            <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy">
              <Link to="/about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonprofitBadgeSection;
