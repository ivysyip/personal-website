import {
  getAllMarkdownFiles,
  MarkdownData,
} from "../../../public/lib/markdown";
import Navbar from "@/components/Navbar/Navbar";
import FilterableProjects from "@/components/Projects/FilterableProjects";

export default async function ProjectsPage() {
  const posts: MarkdownData[] = await getAllMarkdownFiles(); // Fetch on the server

  return (
    <div className="min-h-[calc(100vh-6rem)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="flex flex-col  mx-auto px-12 py-4 mt-24">
        <FilterableProjects posts={posts} />
      </div>
    </div>
  );
}
