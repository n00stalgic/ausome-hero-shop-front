import FadeIn from "@/components/motion/FadeIn";

const characters = ["Nova", "Zeke the Zoomer", "Cosmo", "Kadence the Harmonizer"];

const pillars = [
  {
    title: "The heroes",
    text: "Nova, Zeke the Zoomer, Cosmo, and Kadence the Harmonizer. They show up at our events and in our stories, so a kid can point at one and say: that one is like me.",
  },
  {
    title: "Real-world experiences",
    text: "We build outings designed for neurodivergent kids: iPad workshops at Apple, sensory-friendly adventures, fundraisers with local partners. No sitting still required.",
  },
  {
    title: "Sponsor a Star",
    text: "Sponsor a Star covers event costs for families. Every star puts a kid in the room for a day they will not forget.",
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
          Every mind is its own universe. Ours has a name: the Ausome Galaxy.
          Four heroes live here, each wired a little differently, the way real kids are.
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
