import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";

const blogPosts = [
  {
    slug: "apple-del-amo-workshop-2025",
    title: "A Morning of Magic at Apple Del Amo",
    excerpt: "We spent the morning at Apple Del Amo with our Ausome Heroes, exploring creativity and technology together. Here's what the kids took away from it, and why it mattered.",
    date: "January 2025",
    image: "/lovable-uploads/apple-del-amo-cover.svg",
  },
];

const Blog = () => {
  usePageTitle("Blog");
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section
          className="relative overflow-hidden"
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
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <span className="absolute left-[12%] top-[30%] text-2xl text-cosmic-gold/80 animate-float">✦</span>
            <span className="absolute right-[14%] top-[24%] text-lg text-white/60 animate-float" style={{ animationDelay: "1.5s" }}>✦</span>
            <span className="absolute right-[27%] bottom-[26%] text-xl text-cosmic-gold/60 animate-float" style={{ animationDelay: "3s" }}>✦</span>
          </div>
          <div className="relative z-10 container mx-auto text-center px-6 py-20 md:py-28">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cosmic-gold mb-4">
              From the founder
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              <span className="bg-gradient-to-r from-[#ffe9a8] via-cosmic-gold to-[#e08a1e] bg-clip-text text-transparent">
                Founder's Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Stories, reflections, and updates from Allie on our journey to create inclusive spaces for neurodivergent families.
            </p>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <CardTitle className="text-xl group-hover:text-cosmic-purple transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <span className="inline-flex items-center gap-1 text-cosmic-purple font-medium">
                            Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
