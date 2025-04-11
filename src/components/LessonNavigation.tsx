
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface LessonNavigationProps {
  prevLesson?: {
    id: string;
    title: string;
  };
  nextLesson?: {
    id: string;
    title: string;
  };
  courseId: string;
  onComplete?: () => void;
}

const LessonNavigation = ({
  prevLesson,
  nextLesson,
  courseId,
  onComplete,
}: LessonNavigationProps) => {
  return (
    <div className="flex justify-between mt-8 border-t pt-4">
      <div>
        {prevLesson ? (
          <Button variant="outline" asChild>
            <Link to={`/courses/${courseId}/lessons/${prevLesson.id}`} className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Previous: {prevLesson.title}</span>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link to={`/courses/${courseId}`} className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Course</span>
            </Link>
          </Button>
        )}
      </div>
      
      <div>
        {nextLesson ? (
          <Button asChild onClick={onComplete}>
            <Link to={`/courses/${courseId}/lessons/${nextLesson.id}`} className="flex items-center gap-2">
              <span>Next: {nextLesson.title}</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        ) : (
          <Button onClick={onComplete}>Complete Course</Button>
        )}
      </div>
    </div>
  );
};

export default LessonNavigation;
