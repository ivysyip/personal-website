"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

type NavLink = {
  title: string;
  link: string;
};

const navLinks: NavLink[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "Courses", link: "/Courses" },
  { title: "Projects", link: "/Projects" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 overflow-hidden w-full shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href={"/"}>
          <img src="icon.jpg" className="w-12 h-12 rounded-full" alt="Logo" />
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 text-slate-800 dark:text-slate-200"
          >
            {navbarOpen ? (
              <IconX className="h-7 w-7" />
            ) : (
              <IconMenu2 className="h-7 w-7" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="relative flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                {pathname === link.link && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute left-0 right-0 -top-1 bottom-0 h-[2.25rem] bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Link
                  href={link.link}
                  className={`relative px-4 py-2 text-lg font-medium transition-colors duration-300 rounded-lg ${
                    pathname === link.link
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
