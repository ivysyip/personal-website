import React from "react";
import { SocialIcon } from "react-social-icons/component";
import { IconLink } from "@tabler/icons-react";
import { MarkdownData } from "@/lib/markdown";
import "react-social-icons/github";

const Project = ({ post }: { post: MarkdownData }) => {
  return (
    <div className="relative w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden h-[300px] flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center min-h-[48px] ">
          <h2 className="text-xl font-bold">{post.metadata.title}</h2>
          <div className="flex gap-3 items-center">
            {post.metadata.github && (
              <SocialIcon
                className="transition-transform transform hover:scale-110 hover:opacity-80"
                fgColor="currentColor"
                bgColor="transparent"
                url={post.metadata.github}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {post.metadata.external && (
              <a
                href={post.metadata.external}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-transform transform hover:scale-110 hover:opacity-80"
              >
                <IconLink size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-2 prose max-w-none flex-grow overflow-hidden">
          <p className="line-clamp-3">{post.metadata.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {post.metadata.tags.map((tag, index) => (
            <a
              key={index}
              className="px-3 py-1 text-sm dark:text-yellow-300 dark:bg-yellow-900/50 rounded-full transition"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
