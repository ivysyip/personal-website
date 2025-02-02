"use client";
import React, { useState, useEffect } from "react";
import Course from "@/components/Courses/Course";
import Navbar from "@/components/Navbar/Navbar";
import { courses } from "@/components/data/courses";

const categoryColors: Record<string, string> = {
  "Math + Theory": "bg-blue-200 dark:bg-blue-900/50",
  Software: "bg-purple-200 dark:bg-purple-900/50",
  "AI/ML": "bg-teal-200 dark:bg-teal-900/50",
  "General Requirements + Other": "bg-orange-200 dark:bg-orange-900/50",
  Economics: "bg-indigo-200 dark:bg-indigo-900/50",
  Others: "bg-gray-300 dark:bg-gray-700/50",
};

const categoryTextColors: Record<string, string> = {
  "Math + Theory": "text-blue-700 dark:text-blue-500",
  Software: "text-purple-700 dark:text-purple-500",
  "AI/ML": "text-teal-700 dark:text-teal-500",
  "General Requirements + Other": "text-orange-700 dark:text-orange-500",
  Economics: "text-indigo-700 dark:text-indigo-500",
  Others: "text-gray-700 dark:text-gray-500",
};

const categoryBorderColors: Record<string, string> = {
  "Math + Theory": "border-blue-700 dark:border-blue-500",
  Software: "border-purple-700 dark:border-purple-500",
  "AI/ML": "border-teal-700 dark:border-teal-500",
  "General Requirements + Other": "border-orange-700 dark:border-orange-500",
  Economics: "border-indigo-700 dark:border-indigo-500",
  Others: "border-gray-700 dark:border-gray-500",
};

const prioritizedCategories: string[] = ["Software", "Math + Theory", "AI/ML"];

const Courses = () => {
  const [theme, setTheme] = useState<string>("dark");
  const terms: string[] = [
    ...new Set(courses.map((course) => course.labels.term)),
  ];
  const filterOptions: string[] = ["All", ...terms];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.getItem("theme") || "dark");
    }
  }, []);

  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [coreOnly, setCoreOnly] = useState<boolean>(true);

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) => {
      if (option === "All") {
        return prev.includes("All") ? [] : ["All"];
      }
      const newFilters = prev.includes(option)
        ? prev.filter((f) => f !== option)
        : [...prev.filter((f) => f !== "All"), option];
      return newFilters.length ? newFilters : ["All"];
    });
  };

  const filteredCourses = courses.filter((course) => {
    const matchesTerm =
      selectedFilters.includes("All") ||
      selectedFilters.includes(course.labels.term);
    const matchesCore = !coreOnly || course.labels.core;
    return matchesTerm && matchesCore;
  });

  const uniqueCategories: string[] = [
    ...new Set(filteredCourses.map((course) => course.labels.category)),
  ];

  const sortedCategories: string[] = [
    ...prioritizedCategories.filter((cat) => uniqueCategories.includes(cat)),
    ...uniqueCategories.filter((cat) => !prioritizedCategories.includes(cat)),
  ];

  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => toggleFilter(option)}
                className={`px-4 py-2 transition-all duration-200 ${
                  selectedFilters.includes(option)
                    ? "bg-red-500/50 border border-red-500 rounded-full"
                    : "bg-gray-300 dark:bg-gray-800 hover:bg-red-300/50 hover:border hover:border-red-300 rounded-full"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCoreOnly(!coreOnly)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-800 hover:bg-red-300/50 hover:border hover:border-red-300 rounded-full"
          >
            {coreOnly ? "All Courses" : "Core Only"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedCategories.map((category) => {
            const baseColor =
              categoryColors[category] || categoryColors["Others"];
            const borderColor =
              categoryBorderColors[category] || categoryBorderColors["Others"];
            const textColor =
              categoryTextColors[category] || categoryTextColors["Others"];

            return (
              <div
                key={category}
                className={`border p-4 rounded-lg ${baseColor} ${borderColor} drop-shadow-lg`}
              >
                <h2 className={`text-lg ${textColor} font-bold mb-2`}>
                  {category}
                </h2>
                {filteredCourses
                  .filter((course) => course.labels.category === category)
                  .map((course, index) => (
                    <Course key={index} course={course} />
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
