"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const HomePageAbout = () => {
  return (
    <div className="border-b border-gray-700 dark:border-gray-300 pb-4">
      <h1 className="flex flex-col text-left mb-4 text-4xl lg:text-6xl font-extrabold bg">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ">
          Hi! I&apos;m Ivy!
        </span>

        <span>Welcome to my Website!</span>
      </h1>
      <p className="text-lg lg:text-xl">
        I&apos;m a freshman at the Massachusetts Institute of Technology
        studying CS and Math.
      </p>
      <div className="text-2xl lg:text-4xl">
        I'm a{" "}
        <ReactTyped
          strings={["programmer", "fullstack developer", "AI/ML enthusiast"]}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default HomePageAbout;
