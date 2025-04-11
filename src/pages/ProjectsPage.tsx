
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Code, Plus, Search, Star, StarOff } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
  isStarred: boolean;
}

const sampleProjects: Project[] = [
  {
    id: "todo-app",
    title: "Todo App",
    description: "A simple todo application with React hooks",
    tags: ["react", "hooks", "beginner"],
    lastUpdated: "2 days ago",
    isStarred: true
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "React app that displays weather information using an external API",
    tags: ["api", "react", "intermediate"],
    lastUpdated: "1 week ago",
    isStarred: false
  },
  {
    id: "blog-app",
    title: "Personal Blog",
    description: "A blog site with React Router and context API",
    tags: ["router", "context", "intermediate"],
    lastUpdated: "3 weeks ago",
    isStarred: true
  }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "starred") return matchesSearch && project.isStarred;
    return matchesSearch;
  });
  
  const toggleStar = (id: string) => {
    setProjects(projects.map(project => 
      project.id === id 
        ? { ...project, isStarred: !project.isStarred } 
        : project
    ));
  };
  
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className="text-muted-foreground">
            Create, manage and share your React projects
          </p>
        </div>
        
        <Button className="mt-4 md:mt-0" asChild>
          <Link to="/projects/new" className="flex items-center gap-2">
            <Plus size={16} />
            <span>New Project</span>
          </Link>
        </Button>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full sm:w-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => toggleStar(project.id)}
                  >
                    {project.isStarred ? (
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ) : (
                      <StarOff className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                <CardTitle className="mt-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">
                  Updated {project.lastUpdated}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/projects/${project.id}`}>Open Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-card">
          <div className="mb-4 flex justify-center">
            <Code className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold mb-2">No projects found</h2>
          <p className="text-muted-foreground mb-6">
            {searchQuery 
              ? "Try adjusting your search or filters" 
              : "Get started by creating your first project"}
          </p>
          <Button asChild>
            <Link to="/projects/new" className="flex items-center gap-2">
              <Plus size={16} />
              <span>Create Project</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
