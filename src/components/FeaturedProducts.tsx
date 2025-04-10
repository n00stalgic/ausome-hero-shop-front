
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductType } from "@/types/product";
import { toast } from "@/components/ui/use-toast";

interface FeaturedProductsProps {
  products: ProductType[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const handleAddToCart = (productName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart`,
    });
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-cosmic-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic-navy">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of items designed to support and
            delight autistic children with different sensory needs and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card
                className="overflow-hidden hero-card border border-gray-200 h-full hover:shadow-md transition-shadow bg-white"
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
                    <span className="absolute top-2 left-2 bg-cosmic-blue text-white text-xs font-semibold px-2 py-1 rounded">
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
                              ? "fill-cosmic-gold text-cosmic-gold"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-cosmic-navy">
                    {product.name}
                  </h3>
                  <p className="text-cosmic-coral font-bold text-lg">${product.price}</p>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-cosmic-gold hover:bg-cosmic-coral flex items-center gap-2 transition-colors text-cosmic-navy font-semibold"
                    onClick={(e) => handleAddToCart(product.name, e)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-navy"
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
