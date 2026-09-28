import { Link } from "react-router-dom";

const HeroSection = () => (
  <section
    className="relative overflow-hidden pt-24 text-white"
    style={{
      background: `
        radial-gradient(ellipse 70% 55% at 18% 30%, rgba(138,79,188,0.45) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 85% 25%, rgba(79,151,199,0.35) 0%, transparent 55%),
        radial-gradient(ellipse 55% 45% at 60% 90%, rgba(242,177,52,0.16) 0%, transparent 60%),
        linear-gradient(180deg, #0d1230 0%, #1a1e3a 55%, #2c2060 100%)
      `,
    }}
  >
    <div className="absolute inset-0" aria-hidden="true">
      <div className="stars-small" />
      <div className="stars-medium" />
    </div>

    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:gap-14 md:py-20 lg:grid-cols-[1.06fr_0.94fr]">
      <div className="max-w-2xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-cosmic-gold">
          A community for neurodivergent families
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          A place where kids can{" "}
          <span className="bg-gradient-to-r from-[#ffe9a8] via-cosmic-gold to-[#e08a1e] bg-clip-text text-transparent">
            just be kids.
          </span>
        </h1>
        <p className="mb-7 max-w-xl text-lg leading-relaxed text-white/80">
          Ausome Heroes brings families together through sensory-friendly events,
          practical resources, and a community that gets it. Founded by a mom who
          wanted that place for her own son.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/los-angeles"
            className="inline-flex min-h-12 items-center rounded-md bg-cosmic-gold px-6 font-semibold text-cosmic-navy shadow-lg shadow-cosmic-gold/25 transition-all hover:bg-[#ffd06a] hover:shadow-cosmic-gold/40"
          >
            Explore LA events
          </Link>
          <Link
            to="/about"
            className="inline-flex min-h-12 items-center border-b-2 border-white/70 font-semibold text-white transition-colors hover:border-cosmic-gold hover:text-cosmic-gold"
          >
            Meet Allie and Kadence
          </Link>
        </div>
        <div className="mt-8 border-l-2 border-cosmic-gold pl-4 text-sm leading-relaxed text-white/60">
          A 501(c)(3) nonprofit rooted in Los Angeles.
        </div>
      </div>
      <figure className="relative">
        <div
          className="absolute -inset-4 rounded-[1rem] bg-gradient-to-br from-cosmic-purple/50 via-cosmic-blue/30 to-cosmic-gold/40 blur-2xl"
          aria-hidden="true"
        />
        <img
          src="/lovable-uploads/founder-allie.webp"
          alt="Ausome Heroes founder Allie with her son Kadence"
          className="relative aspect-[4/4.5] w-full rounded-[0.5rem] object-cover object-center shadow-[12px_12px_0_#efb944] md:aspect-[5/4] lg:aspect-[4/4.5]"
          fetchPriority="high"
        />
        <figcaption className="relative mt-5 text-sm text-white/60">
          Allie and Kadence, the family behind Ausome Heroes.
        </figcaption>
      </figure>
    </div>
  </section>
);

export default HeroSection;
