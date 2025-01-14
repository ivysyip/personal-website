"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { IconArrowRight } from "@tabler/icons-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto px-12 py-4">
      <Navbar />
      <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        About Me!
      </h1>
      <ul className="text-lg lg:text-xl py-8">
        <li className="flex">
          <IconArrowRight />
          <strong>Name: </strong>
          {" Ivy Yip"}
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>School Year: </strong>
          {" College Freshman"}
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>School: </strong>
          Massachusetts Institute of Technology {"(MIT)"}
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Major:</strong>
          6-3 {"(Computer Science)"} and 18 {"(Applied Mathematics)"}
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Hometown:</strong>
          Austin, TX and Hong Kong
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Hobbies:</strong>
          Traveling, trying new Asian restaurants, watching Formula 1
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Favorite Food:</strong>
          Sushi and Boba!
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Languages:</strong>
          English & Chinese {"(Cantonese and Mandarin)"}
        </li>
        <li className="flex">
          <IconArrowRight />
          <strong>Instruments:</strong>
          Piano & Liuqin {"(Chinese Instrument)"}
        </li>
      </ul>
    </div>
  );
}
