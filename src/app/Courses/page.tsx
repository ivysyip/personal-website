"use client";
import React from "react";
import Course from "@/components/Courses/Course";
import Navbar from "@/components/Navbar/Navbar";

const dummy = [
  {
    _id: 0,
    name: "Fundamentals of Programming",
    number: "6.1010",
    content: {
      instructor: "Rob Miller",
      units: 12,
    },
  },
  {
    _id: 1,
    name: "Mathematics for Computer Science",
    number: "6.1200",
    content: {
      instructor: "Zach Abel",
      units: 12,
    },
  },
];
export default function () {
  return (
    <div>
      <Navbar />
      <h1>Courses</h1>
      {dummy.map((course) => (
        <Course
          num={course.number}
          name={course.name}
          content={course.content}
        />
      ))}
    </div>
  );
}
