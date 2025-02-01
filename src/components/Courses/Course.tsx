import React from "react";

const Course = ({ course }: { course: any }) => {
  return (
    <div>
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
          {course.name} ({course.number})
        </p>
      </a>
    </div>
  );
};

export default Course;
