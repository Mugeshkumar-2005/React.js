
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";
import { Link } from "react-router-dom";

interface RecommendedItem {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface RecommendedContentProps {
  courses: RecommendedItem[];
  projects: RecommendedItem[];
}

const RecommendedContent = ({ courses, projects }: RecommendedContentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Next</CardTitle>
        <CardDescription>
          Suggested courses based on your progress
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="courses">
          <TabsList className="w-full grid grid-cols-2 rounded-none">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="p-4 space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <Link to={course.link} className="text-primary text-sm hover:underline block mt-1">
                    {course.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="projects" className="p-4 space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <Link to={project.link} className="text-primary text-sm hover:underline block mt-1">
                    {project.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecommendedContent;
