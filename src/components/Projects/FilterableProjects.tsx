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

  const allTags = [...new Set(posts.flatMap((post) => post.metadata.tags))];

  return (
    <div className="px-6">
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
                ? "bg-red-500/50 border border-red-500 rounded-full"
                : "bg-gray-300 dark:bg-gray-800 hover:bg-red-300/50 hover:border hover:border-red-300 rounded-full"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

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
