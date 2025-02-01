import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/mailto";

const Contacts = () => {
  return (
    <div className="flex justify-center sm:justify-start gap-4 p-4">
      <SocialIcon
        className="transition-transform transform hover:scale-110 hover:opacity-80"
        fgColor="currentColor"
        bgColor="transparent"
        url="https://www.linkedin.com/in/ivy-yip-5880ab329/"
      />
      <SocialIcon
        className="transition-transform transform hover:scale-110 hover:opacity-80"
        fgColor="currentColor"
        bgColor="transparent"
        url="https://github.com/ivysyip"
      />
      <SocialIcon
        className="transition-transform transform hover:scale-110 hover:opacity-80"
        fgColor="currentColor"
        bgColor="transparent"
        url="mailto:ivysyip@gmail.com"
      />
    </div>
  );
};

export default Contacts;
