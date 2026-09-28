import FadeIn from "@/components/motion/FadeIn";
import { partners } from "@/data/partners";

const PartnerLogos = () => (
  <section className="py-16 px-6 bg-white border-t border-gray-100">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-center text-xs text-gray-400 uppercase tracking-[0.25em] font-semibold mb-10">
          Community Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={p.alt}
              title={p.name}
              loading="lazy"
              className="h-9 md:h-11 w-auto object-contain grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default PartnerLogos;
