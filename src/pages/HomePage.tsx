
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Code, FileCode, GraduationCap, Monitor, Rocket } from "lucide-react";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";

const featuredCourses: CourseCardProps[] = [
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
    id: "react-hooks",
    title: "React Hooks in Depth",
    description: "Master all React hooks and learn how to build your own custom hooks.",
    level: "intermediate",
    lessons: 8,
    duration: "4 hours",
    imageSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "advanced-patterns",
    title: "Advanced React Patterns",
    description: "Dive into advanced React patterns used in professional applications.",
    level: "advanced",
    lessons: 10,
    duration: "8 hours",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master React.js Through Interactive Learning
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Learn React from beginner to advanced with hands-on lessons, 
              live code examples, and project-based learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Courses</h2>
              <p className="text-muted-foreground mt-2">
                Begin your journey with our carefully designed learning paths
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Learn with ReactWizard?</h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines theory with practice to provide the most effective learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Code Editor</h3>
              <p className="text-muted-foreground">
                Write, run, and experiment with code directly in your browser with real-time feedback.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Structured Learning Path</h3>
              <p className="text-muted-foreground">
                Follow a carefully designed curriculum that takes you from fundamentals to advanced topics.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Monitor className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Learning</h3>
              <p className="text-muted-foreground">
                Understand complex concepts through interactive visualizations and animated examples.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileCode className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Project-Based Learning</h3>
              <p className="text-muted-foreground">
                Apply your knowledge by building real projects that you can add to your portfolio.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Track your learning progress and pick up right where you left off with our dashboard.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuously Updated</h3>
              <p className="text-muted-foreground">
                Stay up to date with the latest React features and best practices with our updated courses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your React Journey?</h2>
            <p className="text-xl mb-8">
              Join thousands of developers who have mastered React with our interactive platform.
            </p>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
