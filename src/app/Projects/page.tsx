import { getAllMarkdownFiles } from "@/lib/markdown";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";

export default function ProjectsPage() {
  const posts = getAllMarkdownFiles();

  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/projects/${post.slug}`}>
                {post.metadata.title} - {post.metadata.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
