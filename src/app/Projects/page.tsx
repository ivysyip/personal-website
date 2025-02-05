import { getAllMarkdownFiles } from "@/lib/markdown";
// import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Project from "@/components/Projects/Project";

export default function ProjectsPage() {
  const posts = getAllMarkdownFiles();

  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <ul>
          {posts.map((post) => (
            <li key={post.metadata.date}>
              <Project post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
