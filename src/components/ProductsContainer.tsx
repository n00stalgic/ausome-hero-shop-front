
import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";
import { getFeaturedProducts } from "@/services/productService";
import ProductCarousel from "@/components/ProductCarousel";

const ProductsContainer = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="py-16 text-center">
          <p className="text-gray-500">Loading products...</p>
        </div>
      ) : (
        <ProductCarousel products={featuredProducts} />
      )}
    </>
  );
};

export default ProductsContainer;
