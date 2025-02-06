"use client";
import { useState, useEffect } from "react";
import { getAllMarkdownFiles, MarkdownData } from "@/lib/markdown";
// import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Project from "@/components/Projects/Project";

export default function ProjectsPage() {
  const [posts, setPosts] = useState<MarkdownData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<MarkdownData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllMarkdownFiles();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  const allTags: string[] = [
    ...new Set(posts.flatMap((post) => post.metadata.tags)),
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.metadata.tags.some((tag) => selectedTags.includes(tag))
        )
      );
    }
  }, [selectedTags, posts]);

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
