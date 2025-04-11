
import { Link } from "react-router-dom";
import { Users, MessageSquare, Star, BookOpen, Calendar, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  closeSidebar: () => void;
}

const DashboardSidebar = ({ closeSidebar }: DashboardSidebarProps) => {
  const menuItems = [
    { icon: <Users size={20} />, label: "Community Forum", link: "/dashboard", active: true },
    { icon: <MessageSquare size={20} />, label: "Direct Messages", link: "#" },
    { icon: <Star size={20} />, label: "Favorites", link: "#" },
    { icon: <BookOpen size={20} />, label: "Resources", link: "#" },
    { icon: <Calendar size={20} />, label: "Events", link: "#" },
    { icon: <Settings size={20} />, label: "Settings", link: "#" },
  ];

  return (
    <div className="h-full bg-cosmic-navy text-white p-4 flex flex-col">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-xl font-bold">Parents Hub</h2>
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-white hover:bg-cosmic-indigo"
          onClick={closeSidebar}
        >
          <X size={20} />
        </Button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${item.active 
                    ? "bg-cosmic-indigo text-white" 
                    : "text-cosmic-light hover:bg-cosmic-indigo/40"}
                `}
                onClick={closeSidebar}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-6 pt-6 border-t border-cosmic-indigo/50">
        <div className="bg-cosmic-indigo/30 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-cosmic-gold">Need Help?</h3>
          <p className="text-cosmic-light text-sm mb-3">Our support team is ready to assist you with any questions.</p>
          <Button variant="outline" size="sm" className="w-full bg-cosmic-purple/20 text-white border-cosmic-purple/40 hover:bg-cosmic-purple/40">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
