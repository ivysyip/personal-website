"use client";
import { useState, useEffect } from "react";
import {
  getAllMarkdownFiles,
  MarkdownData,
} from "../../../public/lib/markdown";
// import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Project from "@/components/Projects/Project";

export default function ProjectsPage() {
  const [posts, setPosts] = useState<MarkdownData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<MarkdownData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Fetch markdown files (server action)
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllMarkdownFiles();
      setPosts(data);
      setFilteredPosts(data);
    }
    fetchPosts();
  }, []);

  // Extract unique tags
  const allTags: string[] = [
    ...new Set(posts.flatMap((post) => post.metadata.tags)),
  ];

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    setFilteredPosts(
      newTags.length === 0
        ? posts
        : posts.filter((post) =>
            post.metadata.tags.some((tag) => newTags.includes(tag))
          )
    );
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <div className="flex flex-wrap gap-2 justify-center my-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedTags.includes(tag)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <li key={post.slug} className="flex">
              <Project post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
