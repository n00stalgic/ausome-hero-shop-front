
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/services/productService";
import { ProductType } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      try {
        const productData = await getProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          navigate("/products"); // Redirect if product not found
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2 text-hero"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Back
          </Button>
          
          {loading ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">Loading product...</p>
            </div>
          ) : product ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-hero-blue text-white text-sm font-semibold px-3 py-1 rounded mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                  <div className="flex items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-hero-orange text-hero-orange"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-2xl font-bold text-hero mb-4">${product.price}</p>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="w-full bg-hero hover:bg-hero-blue flex items-center justify-center gap-2 py-6 text-lg transition-colors"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </Button>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Made with high-quality, durable materials</li>
                    <li>Designed specifically for children with sensory needs</li>
                    <li>Encourages organization and goal-setting</li>
                    <li>Includes stickers and visual cues</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-gray-500">Product not found</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
