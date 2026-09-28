import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const faqs = [
  {
    q: "What is Ausome Heroes?",
    a: "Ausome Heroes is a 501(c)(3) nonprofit community for neurodivergent families, rooted in Los Angeles. We bring families together through sensory-friendly events, practical resources, and a community that gets it. It was founded by Allie, a mom who wanted that place for her own son, Kadence.",
  },
  {
    q: "Where do events take place?",
    a: "Our events take place across the Los Angeles area, hosted with community partners like Apple, Chipotle, Dave & Buster's, and Sky Zone. Visit our LA Events page to see what's coming up.",
    link: { to: "/los-angeles", label: "See LA events" },
  },
  {
    q: "What makes your events sensory-friendly?",
    a: "Our events are designed with neurodivergent kids in mind: understanding crowds, room to move, and zero pressure to mask or “behave.” Just a place where kids can just be kids, and parents can exhale.",
  },
  {
    q: "How can I get involved?",
    a: "There are three big ways: volunteer at events and outreach, nominate an autistic child or young adult for our Hero Spotlight, or give to keep events free for families. Partnerships with local businesses are welcome too.",
    link: { to: "/volunteer", label: "Volunteer with us" },
  },
  {
    q: "What is Sponsor a Star?",
    a: "Sponsor a Star is our way of turning donations into direct impact: your gift funds sensory-friendly events, family resources, and community programs across Los Angeles, helping keep them accessible to the families who need them most.",
  },
  {
    q: "What is Cadence?",
    a: "Cadence is a parent-owned record of your child's ABA journey, built by our founder. Every morning, it writes a short story about the goals they're working on, in your words, yours to keep.",
    external: { href: "https://cadencelive.netlify.app/", label: "Visit Cadence" },
  },
];

const FaqSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-3xl">
      <FadeIn className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-navy mb-4">
          Questions, answered
        </h2>
        <p className="text-gray-600">
          Everything families and supporters usually ask before joining in.
        </p>
      </FadeIn>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.q} delay={i * 0.05}>
            <details className="group rounded-xl border border-gray-200 bg-gray-50/60 open:bg-white open:shadow-md transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-cosmic-navy [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-cosmic-purple transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-gray-600">
                <p>{faq.a}</p>
                {faq.link && (
                  <Link
                    to={faq.link.to}
                    className="mt-3 inline-block font-semibold text-cosmic-purple hover:text-cosmic-navy"
                  >
                    {faq.link.label} →
                  </Link>
                )}
                {faq.external && (
                  <a
                    href={faq.external.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-semibold text-cosmic-purple hover:text-cosmic-navy"
                  >
                    {faq.external.label} →
                  </a>
                )}
              </div>
            </details>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
