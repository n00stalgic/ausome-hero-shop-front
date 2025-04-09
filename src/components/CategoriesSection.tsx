
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "sensory",
    name: "Sensory Toys",
    description: "Toys designed to stimulate senses and provide comfort",
    icon: "🌈",
    color: "bg-hero/10",
    borderColor: "border-hero",
  },
  {
    id: "weighted",
    name: "Weighted Items",
    description: "Products that provide calming pressure and security",
    icon: "🧸",
    color: "bg-hero-blue/10",
    borderColor: "border-hero-blue",
  },
  {
    id: "fidget",
    name: "Fidget Toys",
    description: "Toys that help with focus and reduce anxiety",
    icon: "🎮",
    color: "bg-hero-orange/10",
    borderColor: "border-hero-orange",
  },
  {
    id: "learning",
    name: "Learning Tools",
    description: "Educational toys that make learning fun and accessible",
    icon: "📚",
    color: "bg-green-500/10",
    borderColor: "border-green-500",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our carefully curated categories designed to address various
            needs and interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={`/products?category=${category.id}`} key={category.id}>
              <Card
                className={`h-full transition-all duration-300 hero-card border-2 ${category.borderColor} ${category.color}`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-hero mt-auto font-medium">
                    Explore <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
