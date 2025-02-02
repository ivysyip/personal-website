import React from "react";
import Link from "next/link";

const Navlink = ({
  href,
  title,
  selected,
}: {
  href: string;
  title: string;
  selected: string;
}) => {
  return (
    <Link
      href={href}
      className={`block py-2 pr-2 pl-2 sm:text-xl rounded-lg transition-colors ${
        selected === href
          ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
