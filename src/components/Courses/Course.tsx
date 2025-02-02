import React from "react";

interface CourseLabels {
  category: string;
  term: string;
  core: boolean;
}

interface CourseType {
  name: string;
  number: string;
  link?: string; // Optional property
  labels: CourseLabels;
}

const Course = ({ course }: { course: CourseType }) => {
  return (
    <div className="hover:bg-red-500/50 hover:border hover:border-red-500 hover:rounded-md transition-all duration-200 p-2">
      <a
        href={
          course.link
            ? course.link
            : `https://student.mit.edu/catalog/search.cgi?search=${course.number}`
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2"
      >
        <p>
          {course.number} {course.name}
        </p>
      </a>
    </div>
  );
};

export default Course;
