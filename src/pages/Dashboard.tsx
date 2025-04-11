
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParentForum from "@/components/dashboard/ParentForum";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-cosmic-light/10">
      <Navbar />
      
      <div className="pt-20 flex flex-1 relative">
        {/* Mobile sidebar toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden fixed top-20 left-4 z-40 bg-white rounded-full shadow-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} />
        </Button>
        
        {/* Sidebar */}
        <div className={`
          fixed md:relative z-30 h-[calc(100vh-5rem)] 
          w-[240px] md:w-[240px] shadow-lg transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <DashboardSidebar closeSidebar={() => setSidebarOpen(false)} />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-cosmic-navy mb-2">Parent Community</h1>
              <p className="text-gray-600">
                Connect with other parents, share experiences, and learn from each other in our supportive community space.
              </p>
            </div>
            
            <ParentForum />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
