import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/mailto";
import { IconFileCv } from "@tabler/icons-react";

const Contacts = () => {
  return (
    <div className="flex justify-center sm:justify-start items-center gap-x-4 p-4">
      <span className="w-10 h-10 flex items-center justify-center">
        <SocialIcon
          className="transition-transform transform hover:scale-110 hover:opacity-80"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://www.linkedin.com/in/ivy-yip-5880ab329/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </span>
      <span className="w-10 h-10 flex items-center justify-center">
        <SocialIcon
          className="transition-transform transform hover:scale-110 hover:opacity-80"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://github.com/ivysyip"
          target="_blank"
          rel="noopener noreferrer"
        />
      </span>
      <span className="w-10 h-10 flex items-center justify-center">
        <SocialIcon
          className="transition-transform transform hover:scale-110 hover:opacity-80"
          fgColor="currentColor"
          bgColor="transparent"
          url="mailto:ivysyip@gmail.com"
        />
      </span>
      <span className="w-10 h-10 flex items-center justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center transition-transform transform hover:scale-110 hover:opacity-80"
        >
          <IconFileCv size={24} />
        </a>
      </span>
    </div>
  );
};

export default Contacts;
