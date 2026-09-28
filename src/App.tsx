import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const LosAngeles = lazy(() => import("./pages/LosAngeles"));
const NotFound = lazy(() => import("./pages/NotFound"));
const VolunteerFormPage = lazy(() => import("./pages/VolunteerForm"));
const HeroSpotlight = lazy(() => import("./pages/HeroSpotlight"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-cosmic-navy">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-cosmic-gold" aria-label="Loading" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Navigate to="/about" replace />} />
            <Route path="/los-angeles" element={<LosAngeles />} />
            <Route path="/volunteer" element={<VolunteerFormPage />} />
            <Route path="/hero-spotlight" element={<HeroSpotlight />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
