import FadeIn from "@/components/motion/FadeIn";

const characters = ["Nova", "Zeke the Zoomer", "Cosmo", "Kadence the Harmonizer"];

const pillars = [
  {
    title: "Meet Our Heroes",
    text: "The Ausome Hero Squad features characters like Nova, Zeke the Zoomer, Cosmo, and Kadence the Harmonizer — each representing different strengths and abilities that children on the spectrum may identify with.",
  },
  {
    title: "Educational Support",
    text: "Our products include educational materials, sensory tools, and comfort items that help children navigate their daily adventures while celebrating their unique superpowers.",
  },
  {
    title: "Community Mission",
    text: "Through initiatives like “Sponsor a Star,” we're building a supportive community that empowers autistic children to shine bright in their own way.",
  },
];

const GalaxySection = () => (
  <section className="relative py-20 px-6 bg-cosmic-dark overflow-hidden">
    <div className="absolute inset-0">
      <div className="stars-small" />
      <div className="stars-medium" />
    </div>
    <div className="relative z-10 container mx-auto">
      <FadeIn className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">The Ausome Galaxy</h2>
        <p className="text-cosmic-light max-w-3xl mx-auto">
          Every Mind is a Universe — we celebrate the unique ways our children
          see and experience the world through the Ausome Galaxy and its characters.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {characters.map((name) => (
            <span
              key={name}
              className="rounded-full border border-cosmic-gold/40 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-cosmic-gold"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.1}>
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-cosmic-gold">{pillar.title}</h3>
              <p className="text-cosmic-light leading-relaxed">{pillar.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default GalaxySection;
