
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgressCardsProps {
  totalProgress: number;
  streakDays: number;
  lastActivity: string;
  githubConnected: boolean;
}

const ProgressCards = ({ 
  totalProgress, 
  streakDays, 
  lastActivity, 
  githubConnected 
}: ProgressCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Learning Progress</CardTitle>
          <CardDescription>Your overall platform progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-2">{totalProgress}%</div>
          <Progress value={totalProgress} className="h-2" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Learning Streak</CardTitle>
          <CardDescription>Keep up your daily learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-primary mr-2" />
            <div>
              <div className="text-3xl font-bold">{streakDays} days</div>
              <div className="text-muted-foreground text-sm">Last activity: {lastActivity}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">GitHub Integration</CardTitle>
          <CardDescription>Connect to save your projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Github className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">
                {githubConnected ? "Connected" : "Not connected"}
              </span>
            </div>
            <Link to="/settings/integrations" className="text-primary text-sm hover:underline">
              {githubConnected ? "Manage" : "Connect"}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressCards;
