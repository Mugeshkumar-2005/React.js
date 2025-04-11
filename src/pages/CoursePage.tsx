
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, FileCode, Laptop, Play, User } from "lucide-react";

// Sample course data - in a real app, this would come from an API
const courses = {
  "react-fundamentals": {
    title: "React Fundamentals",
    description: "Learn the core concepts of React including components, props, state, and hooks.",
    longDescription: "This comprehensive course will teach you everything you need to know about the fundamentals of React.js. Starting with the basic concepts, you'll learn how to build components, manage state, use props, and implement hooks. By the end of this course, you'll have a solid understanding of React and be able to build your own applications.",
    level: "beginner",
    lessons: 12,
    duration: "6 hours",
    students: 1547,
    progress: 0,
    instructor: "Alex Johnson",
    imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    modules: [
      {
        title: "Introduction to React",
        lessons: [
          { id: "intro-to-react", title: "What is React?", duration: "10 min", completed: false },
          { id: "setting-up", title: "Setting up your React environment", duration: "15 min", completed: false },
          { id: "first-component", title: "Creating your first component", duration: "20 min", completed: false }
        ]
      },
      {
        title: "React Components",
        lessons: [
          { id: "component-types", title: "Functional vs Class Components", duration: "15 min", completed: false },
          { id: "props", title: "Working with Props", duration: "25 min", completed: false },
          { id: "state", title: "Understanding State", duration: "30 min", completed: false }
        ]
      },
      {
        title: "React Hooks",
        lessons: [
          { id: "useState", title: "Using useState Hook", duration: "20 min", completed: false },
          { id: "useEffect", title: "Using useEffect Hook", duration: "25 min", completed: false },
          { id: "custom-hooks", title: "Creating Custom Hooks", duration: "30 min", completed: false }
        ]
      },
      {
        title: "Building a Project",
        lessons: [
          { id: "todo-app-setup", title: "Todo App: Project Setup", duration: "15 min", completed: false },
          { id: "todo-app-components", title: "Todo App: Components", duration: "25 min", completed: false },
          { id: "todo-app-state", title: "Todo App: State Management", duration: "30 min", completed: false }
        ]
      }
    ]
  },
  // Additional courses would be defined here
};

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API request
    setTimeout(() => {
      if (courseId && courses[courseId as keyof typeof courses]) {
        setCourse(courses[courseId as keyof typeof courses]);
      }
      setLoading(false);
    }, 500);
  }, [courseId]);
  
  if (loading) {
    return (
      <div className="container py-10 flex justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-4xl">
          <div className="h-8 bg-secondary rounded w-3/4"></div>
          <div className="h-4 bg-secondary rounded w-1/2"></div>
          <div className="h-64 bg-secondary rounded"></div>
          <div className="h-12 bg-secondary rounded w-40"></div>
          <div className="space-y-2">
            <div className="h-4 bg-secondary rounded"></div>
            <div className="h-4 bg-secondary rounded"></div>
            <div className="h-4 bg-secondary rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The course you are looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/courses">Browse Courses</Link>
        </Button>
      </div>
    );
  }
  
  const totalLessons = course.modules.reduce(
    (total: number, module: any) => total + module.lessons.length, 
    0
  );
  
  const completedLessons = course.modules.reduce(
    (total: number, module: any) => 
      total + module.lessons.filter((lesson: any) => lesson.completed).length, 
    0
  );
  
  const progress = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;
  
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
            <img 
              src={course.imageSrc} 
              alt={course.title} 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <User size={16} />
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileCode size={16} />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Laptop size={16} />
              <span>{course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-lg mb-4">{course.longDescription}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <Accordion type="single" collapsible className="w-full">
              {course.modules.map((module: any, index: number) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between w-full pr-4">
                      <span>{module.title}</span>
                      <span className="text-muted-foreground text-sm">
                        {module.lessons.length} lessons
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {module.lessons.map((lesson: any) => (
                        <li key={lesson.id} className="border rounded-md p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Play className="h-5 w-5 text-primary" />
                              )}
                            </div>
                            <Link 
                              to={`/courses/${courseId}/lessons/${lesson.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {lesson.title}
                            </Link>
                          </div>
                          <span className="text-muted-foreground text-sm">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="lg:row-start-1">
          <div className="border rounded-lg p-6 sticky top-20">
            <h3 className="text-xl font-bold mb-4">Course Progress</h3>
            <div className="mb-2 flex justify-between text-sm">
              <span>{completedLessons}/{totalLessons} lessons completed</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-6" />
            
            {progress > 0 ? (
              <Button asChild className="w-full mb-4">
                <Link to={`/courses/${courseId}/lessons/intro-to-react`}>Continue Learning</Link>
              </Button>
            ) : (
              <Button asChild className="w-full mb-4">
                <Link to={`/courses/${courseId}/lessons/intro-to-react`}>Start Learning</Link>
              </Button>
            )}
            
            <div className="text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-1 mb-2">
                <User size={14} />
                <span>{course.students.toLocaleString()} students enrolled</span>
              </div>
              <p>Last updated: March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
