
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AusomeGalaxySection = () => {
  return (
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
  );
};

export default AusomeGalaxySection;
