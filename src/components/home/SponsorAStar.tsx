import FadeIn from "@/components/motion/FadeIn";
import DonateButton from "@/components/forms/DonateButton";

const SponsorAStar = () => (
  <section
    className="relative overflow-hidden px-6 py-20 md:py-28"
    style={{
      background: `
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(138,79,188,0.5) 0%, transparent 60%),
        radial-gradient(ellipse 50% 45% at 85% 90%, rgba(242,177,52,0.18) 0%, transparent 55%),
        linear-gradient(180deg, #141a3f 0%, #0d1230 100%)
      `,
    }}
  >
    <div className="absolute inset-0" aria-hidden="true">
      <div className="stars-small" />
      <div className="stars-medium" />
    </div>
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <FadeIn>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cosmic-gold">
          Sponsor a Star
        </p>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Help a kid shine in their own way.
        </h2>
        <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/75">
          Your gift directly funds sensory-friendly events, family resources,
          and community programs across Los Angeles — helping keep them
          accessible to the families who need them most.
        </p>
        <DonateButton
          variant="gold"
          size="lg"
          text="Sponsor a Star"
          className="px-10 font-semibold shadow-xl shadow-cosmic-gold/25"
        />
        <p className="mt-6 text-sm text-white/50">
          Ausome Heroes is a 501(c)(3) nonprofit. Every gift is tax-deductible.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default SponsorAStar;
