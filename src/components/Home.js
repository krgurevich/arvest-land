import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="intro-container">
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
  );
}
