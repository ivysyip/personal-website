"use server";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface MarkdownMetadata {
  title: string;
  date: string;
  external?: string;
  github?: string;
  tags: string[];
  file?: string;
  description: string;
}

export interface MarkdownData {
  slug: string;
  metadata: MarkdownMetadata;
}

const MARKDOWN_DIR = path.join(process.cwd(), "markdown");

export async function getAllMarkdownFiles(): Promise<MarkdownData[]> {
  try {
    const files = await fs.readdir(MARKDOWN_DIR);

    const posts = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(MARKDOWN_DIR, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug: filename.replace(".md", ""),
          metadata: data as MarkdownMetadata,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error("Error reading markdown files:", error);
    return [];
  }
}
