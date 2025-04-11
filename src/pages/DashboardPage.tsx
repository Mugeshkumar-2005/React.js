
import { CheckCircle2, Clock, FileCode, Trophy } from "lucide-react";
import ProgressCards from "@/components/dashboard/ProgressCards";
import ActiveCourses from "@/components/dashboard/ActiveCourses";
import RecentProjects from "@/components/dashboard/RecentProjects";
import AchievementsList from "@/components/dashboard/AchievementsList";
import RecommendedContent from "@/components/dashboard/RecommendedContent";

const DashboardPage = () => {
  // Sample data - in a real app, this would come from Supabase
  const activeCourses = [
    {
      id: "react-fundamentals",
      title: "React Fundamentals",
      description: "Learn the core concepts of React including components, props, state, and hooks.",
      level: "beginner" as "beginner" | "intermediate" | "advanced",
      lessons: 12,
      duration: "6 hours",
      progress: 40,
      imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "react-hooks",
      title: "React Hooks in Depth",
      description: "Master all React hooks and learn how to build your own custom hooks.",
      level: "intermediate" as "beginner" | "intermediate" | "advanced",
      lessons: 10,
      duration: "5 hours",
      progress: 20,
      imageSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  const recentProjects = [
    {
      id: "todo-app",
      name: "Todo App",
      lastUpdated: "2 days ago",
      progress: 70
    },
    {
      id: "weather-app",
      name: "Weather Dashboard",
      lastUpdated: "1 week ago",
      progress: 90
    }
  ];
  
  const achievements = [
    {
      title: "First Lesson Completed",
      description: "You completed your first React lesson",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      date: "Mar 15, 2025"
    },
    {
      title: "Code Streak: 3 Days",
      description: "You've been learning for 3 consecutive days",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      date: "Mar 14, 2025"
    },
    {
      title: "First Project Created",
      description: "You created your first React project",
      icon: <FileCode className="h-5 w-5 text-blue-500" />,
      date: "Mar 10, 2025"
    }
  ];
  
  const recommendedCourses = [
    {
      title: "React Router",
      description: "Learn client-side routing in React applications",
      link: "/courses/react-router",
      linkText: "Start course"
    },
    {
      title: "Form Handling",
      description: "Master form handling in React applications",
      link: "/courses/react-forms",
      linkText: "Start course"
    }
  ];
  
  const recommendedProjects = [
    {
      title: "Chat Application",
      description: "Build a real-time chat app with React and Firebase",
      link: "/projects/templates/chat",
      linkText: "Start project"
    },
    {
      title: "E-commerce Store",
      description: "Create a simple e-commerce store with React",
      link: "/projects/templates/ecommerce",
      linkText: "Start project"
    }
  ];
  
  const totalProgress = 30; // Sample overall progress percentage
  
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and continue your learning journey
          </p>
        </div>
      </div>
      
      <ProgressCards 
        totalProgress={totalProgress} 
        streakDays={3} 
        lastActivity="Today" 
        githubConnected={false} 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <ActiveCourses courses={activeCourses} />
          <RecentProjects projects={recentProjects} />
        </div>
        
        <div className="space-y-8">
          <AchievementsList achievements={achievements} />
          <RecommendedContent 
            courses={recommendedCourses}
            projects={recommendedProjects}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
