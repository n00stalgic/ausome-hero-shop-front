
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProducts, getProductsByCategory } from "@/services/productService";
import { ProductType } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let productData;
        if (category) {
          productData = await getProductsByCategory(category);
        } else {
          productData = await getAllProducts();
        }
        setProducts(productData);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  const handleAddToCart = (productName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {category 
                ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` 
                : "All Products"}
            </h1>
            <p className="text-gray-600">
              Discover our collection of specially selected items for autistic children
            </p>
          </div>
          
          {loading ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <Card
                    className="overflow-hidden hero-card border border-gray-200 h-full hover:shadow-md transition-shadow"
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
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-hero font-bold text-lg">${product.price}</p>
                    </CardContent>

                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-hero hover:bg-hero-blue flex items-center gap-2 transition-colors"
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
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
