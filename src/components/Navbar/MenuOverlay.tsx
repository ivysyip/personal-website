import React from "react";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

type NavLink = {
  title: string;
  link: string;
};

const MenuOverlay = ({ links }: { links: NavLink[] }) => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Navlink href={link.link} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
