"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Info from "@/components/Abouts/Info";
import { aboutInfo } from "@/components/data/info";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About Me!
        </h1>
        <ul className="text-base sm:text-lg py-6 space-y-4 max-w-full">
          {aboutInfo.map((item, index) => (
            <Info key={index} category={item.category} info={item.info} />
          ))}
        </ul>
      </div>
    </div>
  );
}
