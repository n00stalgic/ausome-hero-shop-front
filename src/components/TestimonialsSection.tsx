
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    content:
      "The weighted blanket we bought from AusomeHero's has been a game changer for my son's sleep routine. It's like they truly understand what our kids need.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Special Education Teacher",
    content:
      "I recommend AusomeHero's to all the parents in my class. Their sensory toys are high quality and have made a real difference in helping my students focus during activities.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Occupational Therapist",
    content:
      "What sets AusomeHero's apart is their dedication to understanding autism. Their products aren't just toys - they're thoughtfully designed tools that support development.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Heroes Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from parents, teachers, and therapists about how our products
            have made a positive impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hero-card border border-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "fill-hero-orange text-hero-orange"
                            : "text-gray-300"
                        }
                      />
                    ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
