
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import ProjectsPage from "./pages/ProjectsPage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="#/" element={<HomePage />} />
            <Route path="#/courses" element={<CoursesPage />} />
            <Route path="#/courses/:courseId" element={<CoursePage />} />
            <Route path="#/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
            <Route path="#/projects" element={<ProjectsPage />} />
            <Route path="#/dashboard" element={<DashboardPage />} />
            <Route path="#/about" element={<AboutPage />} />
          </Route>
          <Route path="#/signup" element={<SignupPage />} />
          <Route path="#/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
