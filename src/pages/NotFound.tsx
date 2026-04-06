import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();
  usePageTitle("Page Not Found");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-cosmic-navy to-cosmic-navy/90 pt-20 px-6">
        <div className="text-center max-w-md">
          <p className="text-8xl font-bold text-cosmic-gold mb-4">404</p>
          <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-gray-300 mb-8">
            This page doesn't exist, but there's still plenty to explore.
          </p>
          <Link to="/">
            <Button className="bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy font-semibold px-8">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
