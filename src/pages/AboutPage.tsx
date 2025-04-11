
import { Code, Gift, Rocket, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About ReactWizard</h1>
        <p className="text-xl text-muted-foreground">
          We're on a mission to make learning React.js accessible, engaging, and effective for developers at all skill levels.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            ReactWizard was founded with a clear purpose: to create the most effective learning platform for mastering React.js. We believe that learning by doing is the best way to acquire and retain new skills.
          </p>
          <p className="text-lg">
            Our interactive approach combines theory with practice, allowing you to experiment with code in real-time while receiving immediate feedback. This hands-on method ensures that you not only understand concepts but can apply them in real-world scenarios.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Why ReactWizard?</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Code className="h-3 w-3 text-primary" />
              </div>
              <span>
                <strong className="font-medium">Interactive Learning:</strong> Our platform features an in-browser code editor with live preview, allowing you to experiment and see results instantly.
              </span>
            </li>
            <li className="flex gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Rocket className="h-3 w-3 text-primary" />
              </div>
              <span>
                <strong className="font-medium">Structured Progression:</strong> From fundamentals to advanced patterns, our curriculum is designed to build your skills step by step.
              </span>
            </li>
            <li className="flex gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Gift className="h-3 w-3 text-primary" />
              </div>
              <span>
                <strong className="font-medium">Project-Based Learning:</strong> Apply your knowledge by building real projects that you can add to your portfolio.
              </span>
            </li>
            <li className="flex gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Users className="h-3 w-3 text-primary" />
              </div>
              <span>
                <strong className="font-medium">Community Support:</strong> Join a community of learners to share experiences, ask questions, and collaborate.
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-secondary/20 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Teaching Philosophy</h2>
          <p className="text-lg mb-6">
            We believe that effective learning happens when theory meets practice in a supportive environment. Our teaching approach is built on three core principles:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Learn by Doing</h3>
              <p className="text-muted-foreground">
                Actively coding and experimenting is much more effective than passive consumption of content.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Progressive Complexity</h3>
              <p className="text-muted-foreground">
                Concepts build upon each other, creating a solid foundation before tackling advanced topics.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Real-World Application</h3>
              <p className="text-muted-foreground">
                We focus on teaching patterns and techniques used in professional development environments.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg mb-10">
          ReactWizard was created by a team of experienced developers and educators passionate about making quality React education accessible to everyone.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-full mb-4 bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Alex Johnson"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Alex Johnson</h3>
            <p className="text-muted-foreground">
              Lead Instructor & React Expert
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-full mb-4 bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Sarah Chen"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Sarah Chen</h3>
            <p className="text-muted-foreground">
              Curriculum Developer
            </p>
          </div>
          
          <div className="text-center">
            <div className="aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-full mb-4 bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Michael Rodriguez"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold">Michael Rodriguez</h3>
            <p className="text-muted-foreground">
              Platform Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
