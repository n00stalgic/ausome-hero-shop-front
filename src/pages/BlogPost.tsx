import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, Heart } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import FadeIn from "@/components/motion/FadeIn";
import { partners } from "@/data/partners";

const AppleDelAmoPost = () => (
  <>
    <p className="text-xl md:text-2xl text-cosmic-navy font-medium mb-8 leading-relaxed">
      This past month, we had the incredible opportunity to bring our Ausome Heroes to Apple Del Amo for a special Today at Apple workshop. Watching our kids walk into that space with eyes wide and curiosity sparked reminded me exactly why we do this work.
    </p>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4 mt-10">Why Apple?</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      When I founded Ausome Heroes, I knew that neurodivergent children often miss out on experiences that other families take for granted. Field trips, tech workshops, and creative classes aren't always designed with our kids in mind. But Apple's commitment to accessibility and their patient, inclusive approach made them the perfect partner for this adventure.
    </p>
    <p className="text-gray-700 mb-6 leading-relaxed">
      Technology isn't just about devices. It's about possibility. For many of our kids, iPads and creative apps become communication tools, emotional regulation supports, and windows into worlds they can explore at their own pace.
    </p>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4 mt-10">What Our Heroes Learned</h2>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3 leading-relaxed">
      <li><strong>Creative expression through technology:</strong> Kids explored drawing, animation, and music creation using iPad apps, discovering new ways to share their unique perspectives.</li>
      <li><strong>Problem-solving and patience:</strong> Each project encouraged trial and error in a supportive environment where mistakes were celebrated as part of learning.</li>
      <li><strong>Collaboration and community:</strong> Working alongside peers and Apple team members, our heroes practiced social skills in a low-pressure, sensory-friendly setting.</li>
      <li><strong>Confidence in new environments:</strong> For many families, stepping into a busy retail space can feel overwhelming. This event showed our kids (and their parents) that they belong everywhere.</li>
    </ul>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4 mt-10">A Moment That Stays With Me</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      There was a moment during the workshop when one of our younger heroes, a child who often struggles with transitions, became completely absorbed in creating a digital drawing. His mom looked at me with tears in her eyes and said, "He's never been able to do something like this in public before."
    </p>

    <blockquote className="border-l-4 border-cosmic-gold pl-6 my-10">
      <p className="text-2xl md:text-3xl font-bold text-cosmic-navy leading-snug">
        That's what Ausome Heroes is about. Not just events, but <em>possibilities</em>. Not just inclusion, but <em>belonging</em>.
      </p>
    </blockquote>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4 mt-10">Thank You</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      To the incredible team at Apple Del Amo: thank you for opening your doors and your hearts to our community. To the families who trusted us with this experience: your courage inspires me every day. And to our volunteers who made this event run smoothly: you are the backbone of everything we do.
    </p>

    <div className="bg-gradient-to-br from-cosmic-purple/10 to-cosmic-navy/5 rounded-2xl p-8 text-center mt-12">
      <Heart className="w-8 h-8 text-cosmic-purple mx-auto mb-4" />
      <p className="text-xl font-bold text-cosmic-navy">
        Want to bring Ausome Heroes to your community or business?
      </p>
      <p className="text-gray-600 mt-3">
        <Link to="/volunteer" className="text-cosmic-purple hover:underline font-medium">
          Join our volunteer team
        </Link>
        {" "}or reach out about partnership opportunities.
      </p>
    </div>
  </>
);

const blogPostsData: Record<string, {
  title: string;
  date: string;
  image: string;
  component: React.FC;
}> = {
  "apple-del-amo-workshop-2025": {
    title: "A Morning of Magic at Apple Del Amo",
    date: "January 2025",
    image: "/lovable-uploads/apple-del-amo-cover.svg",
    component: AppleDelAmoPost,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : undefined;
  usePageTitle(post?.title ?? "Blog");

  if (!slug || !post) {
    return <Navigate to="/blog" replace />;
  }

  const PostContent = post.component;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Editorial hero */}
        <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy via-cosmic-navy/45 to-cosmic-navy/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-12 max-w-4xl w-full">
              <FadeIn>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm font-medium mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
                  {post.title}
                </h1>
                <p className="text-white/75 text-lg">
                  By Allie, Founder of Ausome Heroes
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Article */}
        <article className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <FadeIn>
              <PostContent />
            </FadeIn>
          </div>
        </article>

        {/* Partners */}
        <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto">
            <FadeIn>
              <p className="text-center text-xs text-gray-400 uppercase tracking-[0.25em] font-semibold mb-8">
                Made possible with our community partners
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
                {partners.map((p) => (
                  <img
                    key={p.name}
                    src={p.src}
                    alt={p.alt}
                    title={p.name}
                    loading="lazy"
                    className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
