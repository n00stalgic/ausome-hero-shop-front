
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductType } from "@/types/product";

interface FeaturedProductsProps {
  products: ProductType[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of items designed to support and
            delight autistic children with different sensory needs and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hero-card border border-gray-200"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative pt-[100%] overflow-hidden bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform:
                      hoveredProduct === product.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {product.category && (
                  <span className="absolute top-2 left-2 bg-hero-blue text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-hero-orange text-hero-orange"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-hero font-bold text-lg">${product.price}</p>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full bg-hero hover:bg-hero-blue flex items-center gap-2 transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-hero text-hero hover:bg-hero hover:text-white"
            size="lg"
          >
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
