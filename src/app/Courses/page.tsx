"use client";
import React, { useState } from "react";
import Course from "@/components/Courses/Course";
import Navbar from "@/components/Navbar/Navbar";
import { courses } from "@/components/data/courses";

export default function () {
  const terms = [...new Set(courses.map((course) => course.labels.term))];
  const filterOptions = ["all", ...terms];

  const [filter, setFilter] = useState("all");
  const [coreOnly, setCoreOnly] = useState(true);

  const filteredCourses = courses.filter((course) => {
    const matchesTerm = filter === "all" || course.labels.term === filter;
    const matchesCore = !coreOnly || course.labels.core;
    return matchesTerm && matchesCore;
  });

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="flex gap-2 mb-4">
          {filterOptions.map((option) => (
            <button key={option} onClick={() => setFilter(option)}>
              {option}
            </button>
          ))}
          <button onClick={() => setCoreOnly(!coreOnly)}>Core Only</button>
        </div>

        <div className="space-y-4">
          {[
            ...new Set(filteredCourses.map((course) => course.labels.category)),
          ].map((category) => (
            <div key={category} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">{category}</h2>
              {filteredCourses
                .filter((course) => course.labels.category === category)
                .map((course) => (
                  <Course course={course} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
