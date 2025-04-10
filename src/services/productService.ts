
import { ProductType } from "@/types/product";

// Mock data for featured products
export const products: ProductType[] = [
  {
    id: "p1",
    name: "Weighted Superhero Blanket",
    description: "A comforting weighted blanket designed with superhero patterns to provide security and calmness.",
    price: 59.99,
    imageUrl: "https://placehold.co/400x400/9b87f5/FFFFFF/png?text=Weighted+Blanket",
    category: "Weighted",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
  },
  {
    id: "p2",
    name: "Sensory Fidget Cube",
    description: "A 6-sided fidget cube with different sensory activities on each side to help with focus and anxiety.",
    price: 14.99,
    imageUrl: "https://placehold.co/400x400/0EA5E9/FFFFFF/png?text=Fidget+Cube",
    category: "Fidget",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: "p3",
    name: "Noise-Canceling Headphones",
    description: "Comfortable headphones designed to reduce sensory overload in noisy environments.",
    price: 34.99,
    imageUrl: "https://placehold.co/400x400/F97316/FFFFFF/png?text=Headphones",
    category: "Sensory",
    rating: 4.9,
    reviews: 76,
    inStock: true,
    featured: true,
  },
  {
    id: "p4",
    name: "Superhero Visual Schedule Board",
    description: "A customizable visual schedule with superhero themes to help with daily routines and transitions.",
    price: 29.99,
    imageUrl: "https://placehold.co/400x400/22C55E/FFFFFF/png?text=Schedule+Board",
    category: "Learning",
    rating: 4.7,
    reviews: 52,
    inStock: true,
    featured: true,
  },
  {
    id: "p5",
    name: "Tactile Sensory Putty Set",
    description: "Set of therapeutic putty with different textures, resistance levels, and embedded sensory elements.",
    price: 19.99,
    imageUrl: "https://placehold.co/400x400/9b87f5/FFFFFF/png?text=Sensory+Putty",
    category: "Sensory",
    rating: 4.5,
    reviews: 35,
    inStock: true,
    featured: true,
  },
  {
    id: "p6",
    name: "Chewable Superhero Pendant",
    description: "Safe, chewable silicone pendants shaped like superhero emblems for oral sensory needs.",
    price: 12.99,
    imageUrl: "https://placehold.co/400x400/0EA5E9/FFFFFF/png?text=Chew+Pendant",
    category: "Sensory",
    rating: 4.8,
    reviews: 64,
    inStock: true,
    featured: true,
  },
  {
    id: "p7",
    name: "Light-Up Sensory Ball Set",
    description: "Set of textured balls that light up when bounced, providing visual and tactile stimulation.",
    price: 24.99,
    imageUrl: "https://placehold.co/400x400/F97316/FFFFFF/png?text=Sensory+Balls",
    category: "Sensory",
    rating: 4.6,
    reviews: 42,
    inStock: true,
    featured: true,
  },
  {
    id: "p8",
    name: "Emotion Expression Cards",
    description: "Illustrated cards that help children identify and express emotions using superhero characters.",
    price: 16.99,
    imageUrl: "https://placehold.co/400x400/22C55E/FFFFFF/png?text=Emotion+Cards",
    category: "Learning",
    rating: 4.7,
    reviews: 28,
    inStock: true,
    featured: true,
  },
  {
    id: "p9",
    name: "Ausome Daily Planner",
    description: "A visual daily planner with space-themed illustrations to help children organize their day, track emotions, and celebrate achievements in the Mindverse!",
    price: 24.99,
    imageUrl: "/lovable-uploads/11f73234-9c04-4b42-9698-867d0e582b95.png",
    category: "Organization",
    rating: 4.9,
    reviews: 42,
    inStock: true,
    featured: true,
  },
];

// Function to get all products
export const getAllProducts = (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

// Function to get featured products
export const getFeaturedProducts = (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.featured));
    }, 500);
  });
};

// Function to get a product by ID
export const getProductById = (id: string): Promise<ProductType | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 500);
  });
};

// Function to get products by category
export const getProductsByCategory = (category: string): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      ));
    }, 500);
  });
};
