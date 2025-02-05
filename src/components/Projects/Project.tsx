import React from "react";
import { SocialIcon } from "react-social-icons/component";
import { IconLink } from "@tabler/icons-react";
import "react-social-icons/github";

interface MarkdownData {
  slug: string;
  metadata: {
    title: string;
    date: string;
    external: string;
    github: string;
    tags: string[];
    photo: string;
    file: string;
  };
  contentHtml: string;
}

const Project = ({ post }: { post: MarkdownData }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden">
      <img
        src={`/${post.metadata.photo}`}
        alt={post.metadata.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{post.metadata.title}</h2>

        <div className="mt-2 flex flex-wrap gap-2">
          {post.metadata.tags.map((tag, index) => (
            <a
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
            >
              #{tag}
            </a>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <SocialIcon
            className="transition-transform transform hover:scale-110 hover:opacity-80"
            fgColor="currentColor"
            bgColor="transparent"
            url={post.metadata.github}
            target="_blank"
            rel="noopener noreferrer"
          />

          {post.metadata.external && (
            <a
              href={post.metadata.external}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            >
              <IconLink size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
