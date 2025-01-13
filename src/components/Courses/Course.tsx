import React from "react";

const Course = ({ name, num, content }) => {
  return (
    <div>
      {name} {num} {content.instructor}
    </div>
  );
};

export default Course;
