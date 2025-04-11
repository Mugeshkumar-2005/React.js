
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  lastUpdated: string;
  progress: number;
}

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recent Projects</h2>
        <Link to="/projects" className="text-primary text-sm hover:underline flex items-center">
          View all projects
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Updated {project.lastUpdated}
                  </p>
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary hover:underline text-sm"
                >
                  Open
                </Link>
              </div>
              <div className="mb-1 flex justify-between text-xs">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
