import React from "react";
import { SocialIcon } from "react-social-icons/component";
import {
  IconLink,
  IconFile,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { MarkdownData } from "../../../public/lib/markdown";
import "react-social-icons/github";

const Project = ({ post }: { post: MarkdownData }) => {
  return (
    <div className="relative w-full border bg-purple-200 dark:bg-purple-900/50 border-purple-700 dark:border-purple-500 shadow-lg rounded-lg overflow-hidden h-[300px] flex flex-col">
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
            {post.metadata.file && (
              <a
                href={post.metadata.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-transform transform hover:scale-110 hover:opacity-80"
              >
                <IconFile size={24} />
              </a>
            )}
            {post.metadata.youtube && (
              <a
                href={post.metadata.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-transform transform hover:scale-110 hover:opacity-80"
              >
                <IconBrandYoutubeFilled size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-2 prose max-w-none flex-grow overflow-hidden">
          <p>{post.metadata.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {post.metadata.tags.map((tag, index) => (
            <a
              key={index}
              className="px-3 py-1 text-sm text-yellow-700 bg-yellow-200 dark:text-yellow-300 dark:bg-yellow-900/50 rounded-full transition"
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
