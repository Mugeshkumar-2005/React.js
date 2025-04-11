
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, LogIn, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Code size={24} className="text-primary" />
            <span>ReactWizard</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
            Courses
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <LogIn size={16} />
              <span>Login</span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="hidden md:flex items-center gap-2">
              <User size={16} />
              <span>Sign Up</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
