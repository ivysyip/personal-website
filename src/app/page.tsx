import HomePageAbout from "../components/HomePageAbout";
import Navbar from "../components/Navbar/Navbar";
import Contacts from "../components/Contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col items-center sm:items-start container mx-auto px-12 py-4 mt-24">
        <HomePageAbout />
        <Contacts />
      </main>
    </div>
  );
}
