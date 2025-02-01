import React from "react";

const Course = ({
  name,
  num,
  content,
}: {
  name: string;
  num: string;
  content: any;
}) => {
  return (
    <div>
      {name} {num} {content.instructor}
    </div>
  );
};

export default Course;
