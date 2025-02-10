import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pr-2 pl-2 sm:text-xl rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-gray-500`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
