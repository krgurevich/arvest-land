import React from "react";
import "../styles/About.css";

import profile from "../images/profile_picture.png";

export default function About() {
  return (
    <div className="container-fluid">
    <div className="top-container">
      <div className="wrapper">
        <div className="static-txt">I am a ...</div>
        <ul className="dynamic-txts">
          <li>
            <span>Web Designer</span>
          </li>
          <li>
            <span>Web Developer</span>
          </li>
        </ul>
      </div>
      </div>
      <div></div>
</div>
  );
}
