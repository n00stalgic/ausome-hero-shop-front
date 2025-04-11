
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, Share2, Flag, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample forum post data
const FORUM_POSTS = [
  {
    id: 1,
    author: "ParentSupport23",
    avatar: "/placeholder.svg",
    title: "Tips for sensory-friendly birthday parties",
    content: "We're planning a birthday party for my son who has sensory sensitivities. Has anyone hosted a sensory-friendly celebration that was still fun for all kids? Looking for activity ideas and general tips!",
    likes: 24,
    comments: 15,
    category: "Advice",
    time: "2 hours ago"
  },
  {
    id: 2,
    author: "AusomeParent",
    avatar: "/placeholder.svg",
    title: "Success with new visual schedule system",
    content: "I wanted to share our success with implementing a new visual schedule at home. We've been using it for a month now, and the improvement in transitions has been amazing. I'm happy to share the template if anyone's interested!",
    likes: 36,
    comments: 8,
    category: "Success Stories",
    time: "5 hours ago"
  },
  {
    id: 3,
    author: "LearningTogether",
    avatar: "/placeholder.svg",
    title: "IEP meeting preparation advice needed",
    content: "We have our first IEP meeting next week, and I'm feeling a bit overwhelmed. Any advice on what to prepare or questions I should be ready to ask? Any resources that helped you navigate this process?",
    likes: 18,
    comments: 22,
    category: "Questions",
    time: "1 day ago"
  }
];

const ParentForum = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search discussions..." 
            className="pl-10 bg-white border-cosmic-indigo/20 focus-visible:ring-cosmic-purple"
          />
        </div>
        <Button className="bg-cosmic-purple hover:bg-cosmic-indigo text-white">
          <Plus size={18} className="mr-2" />
          New Discussion
        </Button>
      </div>

      <Tabs defaultValue="discussions" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full max-w-md bg-cosmic-light/10">
          <TabsTrigger value="discussions" className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white">
            Discussions
          </TabsTrigger>
          <TabsTrigger value="questions" className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white">
            Questions
          </TabsTrigger>
          <TabsTrigger value="success" className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white">
            Success Stories
          </TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white">
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4 mt-4">
          {FORUM_POSTS.map(post => (
            <ForumPost key={post.id} post={post} />
          ))}
        </TabsContent>
        
        <TabsContent value="questions" className="space-y-4 mt-4">
          {FORUM_POSTS.filter(post => post.category === "Questions").map(post => (
            <ForumPost key={post.id} post={post} />
          ))}
        </TabsContent>
        
        <TabsContent value="success" className="space-y-4 mt-4">
          {FORUM_POSTS.filter(post => post.category === "Success Stories").map(post => (
            <ForumPost key={post.id} post={post} />
          ))}
        </TabsContent>
        
        <TabsContent value="resources" className="mt-4">
          <Card className="border-cosmic-indigo/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 mb-4 rounded-full bg-cosmic-light/20 flex items-center justify-center">
                  <Plus size={24} className="text-cosmic-indigo" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Resources</h3>
                <p className="text-gray-600 mb-4">
                  Help other parents by sharing helpful resources, books, or tools that have worked for your family.
                </p>
                <Button className="bg-cosmic-purple hover:bg-cosmic-indigo text-white">
                  Add Resource
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Forum Post Component
interface ForumPostProps {
  post: {
    id: number;
    author: string;
    avatar: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
    category: string;
    time: string;
  };
}

const ForumPost = ({ post }: ForumPostProps) => {
  return (
    <Card className="border-cosmic-indigo/20 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cosmic-purple/20 flex items-center justify-center text-cosmic-purple font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-cosmic-light/20 text-cosmic-navy">
            {post.category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-2 text-cosmic-navy">{post.title}</CardTitle>
        <p className="text-gray-600">{post.content}</p>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cosmic-purple">
            <ThumbsUp size={18} className="mr-2" /> {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cosmic-purple">
            <MessageSquare size={18} className="mr-2" /> {post.comments}
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cosmic-purple">
            <Share2 size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-cosmic-purple">
            <Flag size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ParentForum;
