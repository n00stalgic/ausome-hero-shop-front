import { Link } from "react-router-dom";

const HomeEvents = () => (
  <section className="border-t border-[#e8e1d5] bg-white px-6 py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1fr]">
      <div className="max-w-xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#715292]">In the community</p>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-[#18233a] md:text-4xl">A good day starts with knowing what to expect.</h2>
        <p className="mb-6 text-lg leading-relaxed text-[#394356]">
          We make room for families to show up as they are. See where we've gathered,
          and check back for the next Los Angeles event.
        </p>
        <Link to="/los-angeles" className="inline-flex min-h-12 items-center border-b-2 border-[#18233a] font-semibold text-[#18233a] hover:text-[#715292]">
          See LA events
        </Link>
      </div>
      <img
        src="/lovable-uploads/apple-ipad-workshop.png"
        alt="Ausome Heroes iPad exploration workshop"
        className="aspect-[4/3] w-full rounded-md object-cover"
        loading="lazy"
      />
    </div>
  </section>
);
export default HomeEvents;
