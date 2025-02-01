"use client";
import React from "react";
import Course from "@/components/Courses/Course";
import Navbar from "@/components/Navbar/Navbar";
import { courses } from "@/components/data/courses";

export default function () {
  return (
    <div>
      <Navbar />
      <h1>Courses</h1>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  );
}
