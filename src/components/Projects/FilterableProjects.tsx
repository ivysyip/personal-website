"use client";
import { useState } from "react";
import Project from "@/components/Projects/Project";
import { MarkdownData } from "../../../public/lib/markdown";

export default function FilterableProjects({
  posts,
}: {
  posts: MarkdownData[];
}) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter((post) =>
          post.metadata.tags.some((tag) => selectedTags.includes(tag))
        );

  // Get unique tags
  const allTags = [...new Set(posts.flatMap((post) => post.metadata.tags))];

  return (
    <div className="px-6">
      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2 justify-center my-4">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTags((prev) =>
                prev.includes(tag)
                  ? prev.filter((t) => t !== tag)
                  : [...prev, tag]
              )
            }
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Project key={post.slug} post={post} />)
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
