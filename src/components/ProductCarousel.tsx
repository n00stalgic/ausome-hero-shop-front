
import { ProductType } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  products: ProductType[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
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

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link 
                    to={product.id === "p9" ? `/products/${product.id}` : `/products/${product.id}`}
                    className="block h-full"
                  >
                    <div
                      className="overflow-hidden hero-card border border-gray-200 h-full rounded-lg hover:shadow-md transition-shadow bg-white"
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

                      <div className="p-4">
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
                        <p className="text-cosmic-coral font-bold text-lg mb-4">${product.price}</p>
                        
                        <Button
                          className="w-full bg-cosmic-gold hover:bg-cosmic-coral flex items-center gap-2 transition-colors text-cosmic-navy font-semibold"
                          onClick={(e) => handleAddToCart(product.name, e)}
                        >
                          <ShoppingCart size={16} />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-navy"
            size="lg"
          >
            <Link to="/products" className="flex items-center gap-2">
              View All Products <ChevronRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
