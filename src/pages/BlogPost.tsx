import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, Heart } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const AppleDelAmoPost = () => (
  <>
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      This past month, we had the incredible opportunity to bring our Ausome Heroes to Apple Del Amo for a special Today at Apple workshop. Watching our kids walk into that space with eyes wide and curiosity sparked reminded me exactly why we do this work.
    </p>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4">Why Apple?</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      When I founded Ausome Heroes, I knew that neurodivergent children often miss out on experiences that other families take for granted. Field trips, tech workshops, and creative classes aren't always designed with our kids in mind. But Apple's commitment to accessibility and their patient, inclusive approach made them the perfect partner for this adventure.
    </p>
    <p className="text-gray-700 mb-6 leading-relaxed">
      Technology isn't just about devices. It's about possibility. For many of our kids, iPads and creative apps become communication tools, emotional regulation supports, and windows into worlds they can explore at their own pace.
    </p>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4">What Our Heroes Learned</h2>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
      <li><strong>Creative expression through technology:</strong> Kids explored drawing, animation, and music creation using iPad apps, discovering new ways to share their unique perspectives.</li>
      <li><strong>Problem-solving and patience:</strong> Each project encouraged trial and error in a supportive environment where mistakes were celebrated as part of learning.</li>
      <li><strong>Collaboration and community:</strong> Working alongside peers and Apple team members, our heroes practiced social skills in a low-pressure, sensory-friendly setting.</li>
      <li><strong>Confidence in new environments:</strong> For many families, stepping into a busy retail space can feel overwhelming. This event showed our kids (and their parents) that they belong everywhere.</li>
    </ul>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4">A Moment That Stays With Me</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      There was a moment during the workshop when one of our younger heroes, a child who often struggles with transitions, became completely absorbed in creating a digital drawing. His mom looked at me with tears in her eyes and said, "He's never been able to do something like this in public before."
    </p>
    <p className="text-gray-700 mb-6 leading-relaxed">
      That's what Ausome Heroes is about. Not just events, but <em>possibilities</em>. Not just inclusion, but <em>belonging</em>.
    </p>

    <h2 className="text-2xl font-bold text-cosmic-navy mb-4">Thank You</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      To the incredible team at Apple Del Amo: thank you for opening your doors and your hearts to our community. To the families who trusted us with this experience: your courage inspires me every day. And to our volunteers who made this event run smoothly: you are the backbone of everything we do.
    </p>

    <div className="bg-cosmic-purple/10 rounded-xl p-6 text-center">
      <Heart className="w-8 h-8 text-cosmic-purple mx-auto mb-3" />
      <p className="text-lg font-medium text-cosmic-navy">
        Want to bring Ausome Heroes to your community or business?
      </p>
      <p className="text-gray-600 mt-2">
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
    image: "/lovable-uploads/apple-ipad-workshop.png",
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="py-12 px-6">
          <div className="container mx-auto max-w-3xl">
            {/* Back Link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-cosmic-purple hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-cosmic-navy mb-4">
                {post.title}
              </h1>
              <p className="text-gray-600">
                By Allie, Founder of Ausome Heroes
              </p>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
              <PostContent />
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
