import React from "react";
import { FaInstagram } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://www.instagram.com/hadar_yeyni" target="_blank">
        <FaInstagram />
      </a>
      {/* <a href="https://www.linkedin.com/in/eden-maimon" target="_blank">
        <FaLinkedinIn />
      </a>
      <a
        data-tip
        href="https://www.dropbox.com/s/iitw2y2r3e5yv5f/Eden%20Maimon%20CV-%20English.pdf?dl=0"
        target="_blank"
      >
        <FaRegFilePdf />
        <ReactTooltip
          effect="solid"
          arrowColor="lightgrey"
          textColor="#000"
          backgroundColor="#fff"
          place="right"
          className="skills-tooltip"
        >
          Eden Maimon CV
        </ReactTooltip>
      </a> */}
    </div>
  );
}
