"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface MarkdownData {
  slug: string;
  metadata: {
    title: string;
    date: string;
    external: string;
    github: string;
    tags: string[];
    file: string;
    description: string;
  };
  contentHtml: string;
}

const MARKDOWN_DIR = path.join(process.cwd(), "markdown");

export async function getAllMarkdownFiles(): Promise<MarkdownData[]> {
  const files = fs.readdirSync(MARKDOWN_DIR);

  return await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(MARKDOWN_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      return {
        slug: filename.replace(".md", ""),
        metadata: data as MarkdownData["metadata"],
        contentHtml,
      };
    })
  );
}
