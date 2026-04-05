import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import LosAngeles from "./pages/LosAngeles";
import MeetTheFounder from "./pages/MeetTheFounder";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import VolunteerFormPage from "./pages/VolunteerForm";
import HeroSpotlight from "./pages/HeroSpotlight";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<MeetTheFounder />} />
        <Route path="/los-angeles" element={<LosAngeles />} />
        <Route path="/volunteer" element={<VolunteerFormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hero-spotlight" element={<HeroSpotlight />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
