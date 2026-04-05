import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const Dashboard = () => {
  usePageTitle("Community");
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-cosmic-light/10">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-cosmic-navy mb-4">Parent Community</h1>
          <p className="text-gray-600 mb-2">
            A space for parents to connect, share experiences, and support each other.
          </p>
          <p className="text-sm text-gray-400">Coming Soon</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
