
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";

interface ActiveCoursesProps {
  courses: CourseCardProps[];
}

const ActiveCourses = ({ courses }: ActiveCoursesProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Active Courses</h2>
        <Link to="/courses" className="text-primary text-sm hover:underline flex items-center">
          View all courses
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default ActiveCourses;
