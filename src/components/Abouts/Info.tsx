import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

const Info = ({ category, info }: { category: string; info: string }) => {
  return (
    <li className="flex flex-wrap items-start gap-2">
      <div className="flex items-center space-x-2 max-w-full">
        <IconArrowRight className="w-5 h-5 flex-shrink-0" />
        <p className="font-bold whitespace-nowrap">{category}:</p>
        <p className="break-words">{info}</p>
      </div>
    </li>
  );
};

export default Info;
