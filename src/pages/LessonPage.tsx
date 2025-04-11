
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CodeEditor from "@/components/CodeEditor";
import LessonNavigation from "@/components/LessonNavigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle2, Play } from "lucide-react";

// Sample lesson data - in a real app, this would come from an API
const lessons = {
  "intro-to-react": {
    title: "What is React?",
    courseId: "react-fundamentals",
    content: `
      <h2>Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.</p>
      
      <p>React allows developers to build complex UIs from small, isolated pieces of code called "components". Components can be thought of as custom HTML elements that have their own functionality and appearance.</p>
      
      <h3>Key Features of React</h3>
      <ul>
        <li><strong>Component-Based Architecture:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
        <li><strong>Declarative:</strong> React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render the right components when your data changes.</li>
        <li><strong>Learn Once, Write Anywhere:</strong> React can be used to develop not only web applications but also mobile applications (React Native) and even VR applications (React 360).</li>
        <li><strong>Virtual DOM:</strong> React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.</li>
      </ul>
      
      <h3>Your First React Component</h3>
      <p>Let's create a simple React component that displays a greeting message:</p>
    `,
    codeExample: `function Greeting() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the wonderful world of React.js</p>
    </div>
  );
}

// To use this component, you would render it like this:
// ReactDOM.render(<Greeting />, document.getElementById('root'));`,
    exercise: {
      title: "Create a Profile Component",
      description: "Create a Profile component that displays a user's name, job title, and a short bio.",
      initialCode: `// Create a Profile component that displays:
// 1. A name (e.g., "Jane Doe")
// 2. A job title (e.g., "Frontend Developer")
// 3. A short bio (e.g., "I love creating web applications with React")

function Profile() {
  // Your code here
  
}

// Don't modify this
ReactDOM.render(<Profile />, document.getElementById('root'));`,
      solution: `function Profile() {
  return (
    <div>
      <h1>Jane Doe</h1>
      <h2>Frontend Developer</h2>
      <p>I love creating web applications with React</p>
    </div>
  );
}

// Don't modify this
ReactDOM.render(<Profile />, document.getElementById('root'));`
    },
    prevLesson: null,
    nextLesson: {
      id: "setting-up",
      title: "Setting up your React environment"
    }
  },
  // More lessons would be defined here
};

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  
  useEffect(() => {
    // Simulate API request
    setTimeout(() => {
      if (lessonId && lessons[lessonId as keyof typeof lessons]) {
        const currentLesson = lessons[lessonId as keyof typeof lessons];
        setLesson(currentLesson);
        setCode(currentLesson.exercise?.initialCode || currentLesson.codeExample);
      }
      setLoading(false);
    }, 500);
  }, [lessonId]);
  
  if (loading) {
    return (
      <div className="container py-10 flex justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-4xl">
          <div className="h-8 bg-secondary rounded w-3/4"></div>
          <div className="h-4 bg-secondary rounded w-1/2"></div>
          <div className="h-64 bg-secondary rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!lesson) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The lesson you are looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to={`/courses/${courseId}`}>Back to Course</Link>
        </Button>
      </div>
    );
  }
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    
    // Very basic validation for exercise completion
    // In a real app, you would have more sophisticated validation
    if (lesson.exercise && newCode.includes("<h1>") && newCode.includes("<h2>") && newCode.includes("<p>")) {
      setExerciseCompleted(true);
    } else {
      setExerciseCompleted(false);
    }
  };
  
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to={`/courses/${courseId}`} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to Course</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div 
            className="lesson-content prose max-w-none"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
          
          <div>
            <h3 className="text-xl font-bold mb-4">Code Example</h3>
            <CodeEditor 
              initialCode={lesson.codeExample} 
              language="jsx" 
              readOnly 
            />
          </div>
          
          {lesson.exercise && (
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-4">Exercise: {lesson.exercise.title}</h3>
                {exerciseCompleted && (
                  <div className="flex items-center text-green-500">
                    <CheckCircle2 size={16} className="mr-1" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
              <p className="mb-4">{lesson.exercise.description}</p>
              <Tabs defaultValue="editor">
                <TabsList className="mb-4">
                  <TabsTrigger value="editor">
                    <div className="flex items-center gap-2">
                      <Play size={14} />
                      <span>Exercise</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="solution">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      <span>Solution</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="editor">
                  <CodeEditor 
                    initialCode={lesson.exercise.initialCode} 
                    language="jsx" 
                    onCodeChange={handleCodeChange}
                  />
                </TabsContent>
                
                <TabsContent value="solution">
                  <CodeEditor 
                    initialCode={lesson.exercise.solution} 
                    language="jsx" 
                    readOnly
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          <LessonNavigation
            prevLesson={lesson.prevLesson}
            nextLesson={lesson.nextLesson}
            courseId={courseId || ""}
          />
        </div>
        
        <div className="hidden lg:block">
          <div className="border rounded-lg p-6 sticky top-20">
            <h3 className="text-xl font-bold mb-4">In This Lesson</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Introduction to React
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Key Features of React
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Your First React Component
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Exercise: Create a Profile Component
                </a>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stuck on this lesson? Get help from our community or check the documentation.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View Docs</Button>
                <Button variant="outline" size="sm">Ask Community</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
