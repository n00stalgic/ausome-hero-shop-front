import FadeIn from "@/components/motion/FadeIn";

const partners = [
  { name: "Apple", src: "/lovable-uploads/apple-ipad-workshop.png" },
  { name: "Chuck E. Cheese", src: "/lovable-uploads/chuck-e-cheese-fundraiser.png" },
  { name: "Chipotle", src: "/lovable-uploads/chipotle-fundraiser.jpeg" },
  { name: "Dave & Buster's", src: "/lovable-uploads/dave-busters-fundraiser.png" },
];

const PartnerLogos = () => (
  <section className="py-12 px-6 bg-white border-t border-gray-100">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-medium mb-8">
          Community Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-3xl mx-auto">
          {partners.map((p) => (
            <div key={p.name} className="w-20 h-20 flex items-center justify-center">
              <img
                src={p.src}
                alt={p.name}
                className="max-w-full max-h-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default PartnerLogos;
