import Image from "next/image";
import HomePageAbout from "../components/HomePageAbout";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start container mx-auto px-12 py-4">
        <HomePageAbout/>
      </main>
    </div>
  );
}
