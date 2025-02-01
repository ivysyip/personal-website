import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }: { href: any; title: any }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 sm:text-xl">
      {title}
    </Link>
  );
};

export default Navlink;
