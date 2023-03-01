import React from "react";
import "../styles/About.css";

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
      <div className="about-container">
        <p className="about-p">
          Hello! My name is Kristina. I am currently enrolled in the Columbia
          Engineering Full Stack Developer Program. I am fascinated with the
          prospect of developing websites and applications that would showcase
          the blended world of artistic creativity and logic, functionality and
          accessibility.
        </p>
        <p className="about-p">
          One constant in web development is change. To be a great web
          developer, one must continuously "refactor" skills and gain knowledge.
          I am a true believer that the only way to craft something great is to
          be on the forefront of this paradigm. I am excited about my journey
          and look forward to sharing my vision with you.
        </p>
        <hr></hr>
      </div>
    </div>
  );
}
