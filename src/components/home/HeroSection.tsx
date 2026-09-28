import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative bg-[#f8f3e9] pt-24 text-[#18233a]">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:gap-14 md:py-20 lg:grid-cols-[1.06fr_0.94fr]">
      <div className="max-w-2xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#715292]">
          A community for neurodivergent families
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          A place where kids can just be kids.
        </h1>
        <p className="mb-7 max-w-xl text-lg leading-relaxed text-[#394356]">
          Ausome Heroes brings families together through sensory-friendly events,
          practical resources, and a community that gets it. Founded by a mom who
          wanted that place for her own son.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/los-angeles"
            className="inline-flex min-h-12 items-center rounded-md bg-[#18233a] px-6 font-semibold text-white transition-colors hover:bg-[#32416a]"
          >
            Explore LA events
          </Link>
          <Link
            to="/about"
            className="inline-flex min-h-12 items-center border-b-2 border-[#18233a] font-semibold text-[#18233a] hover:text-[#715292]"
          >
            Meet Allie and Kadence
          </Link>
        </div>
        <div className="mt-8 border-l-2 border-[#efb944] pl-4 text-sm leading-relaxed text-[#596273]">
          A 501(c)(3) nonprofit rooted in Los Angeles.
        </div>
      </div>
      <figure className="relative">
        <img
          src="/lovable-uploads/founder-allie.jpeg"
          alt="Ausome Heroes founder Allie with her son Kadence"
          className="aspect-[4/4.5] w-full rounded-[0.5rem] object-cover object-center shadow-[12px_12px_0_#efb944] md:aspect-[5/4] lg:aspect-[4/4.5]"
          fetchPriority="high"
        />
        <figcaption className="mt-5 text-sm text-[#596273]">Allie and Kadence, the family behind Ausome Heroes.</figcaption>
      </figure>
    </div>
  </section>
);

export default HeroSection;
