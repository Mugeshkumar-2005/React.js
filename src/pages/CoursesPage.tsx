
import { useState } from "react";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

// Sample course data - in a real app, this would come from an API
const allCourses: CourseCardProps[] = [
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description: "Learn the core concepts of React including components, props, state, and hooks.",
    level: "beginner",
    lessons: 12,
    duration: "6 hours",
    imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "jsx-in-depth",
    title: "JSX In-Depth",
    description: "Master JSX syntax and learn advanced techniques for building dynamic UIs.",
    level: "beginner",
    lessons: 8,
    duration: "4 hours",
    imageSrc: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "component-lifecycle",
    title: "Component Lifecycle",
    description: "Understand the React component lifecycle and how to use lifecycle methods effectively.",
    level: "beginner",
    lessons: 6,
    duration: "3 hours",
    imageSrc: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "react-hooks",
    title: "React Hooks in Depth",
    description: "Master all React hooks and learn how to build your own custom hooks.",
    level: "intermediate",
    lessons: 10,
    duration: "5 hours",
    imageSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "react-router",
    title: "React Router",
    description: "Learn how to implement client-side routing in your React applications.",
    level: "intermediate",
    lessons: 8,
    duration: "4 hours",
    imageSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "react-forms",
    title: "Form Handling in React",
    description: "Master form handling in React with controlled components, validation, and libraries.",
    level: "intermediate",
    lessons: 7,
    duration: "3.5 hours",
    imageSrc: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "advanced-patterns",
    title: "Advanced React Patterns",
    description: "Dive into advanced React patterns used in professional applications.",
    level: "advanced",
    lessons: 10,
    duration: "8 hours",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "performance-optimization",
    title: "React Performance Optimization",
    description: "Learn techniques to optimize the performance of your React applications.",
    level: "advanced",
    lessons: 9,
    duration: "6 hours",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "testing-react",
    title: "Testing React Applications",
    description: "Master testing React components using Jest, React Testing Library, and Cypress.",
    level: "advanced",
    lessons: 11,
    duration: "7 hours",
    imageSrc: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLevel, setCurrentLevel] = useState("all");
  
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = currentLevel === "all" || course.level === currentLevel;
    
    return matchesSearch && matchesLevel;
  });
  
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">React.js Courses</h1>
        <p className="text-xl text-muted-foreground">
          Browse our comprehensive collection of React.js courses for all skill levels
        </p>
      </div>
      
      <div className="mb-8">
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Tabs defaultValue="all" value={currentLevel} onValueChange={setCurrentLevel} className="w-full flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Levels</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground mb-2">No courses found matching your search</p>
          <p>Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
