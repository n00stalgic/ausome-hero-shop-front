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
        <section className="py-16 px-6 bg-gradient-to-br from-cosmic-navy/5 to-cosmic-purple/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cosmic-navy">
              Founder's Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stories, reflections, and updates from Allie on our journey to create inclusive spaces for neurodivergent families.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
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
