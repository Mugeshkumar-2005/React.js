
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, FileCode } from "lucide-react";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  lessons: number;
  duration: string;
  progress?: number;
  imageSrc?: string;
}

const CourseCard = ({
  id,
  title,
  description,
  level,
  lessons,
  duration,
  progress = 0,
  imageSrc,
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={`${getLevelColor(level)} capitalize`}>
            {level}
          </Badge>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <FileCode size={16} />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/courses/${id}`} className="flex items-center justify-center gap-2">
            <span>{progress > 0 ? "Continue Learning" : "Start Learning"}</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
