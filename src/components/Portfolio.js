import React from "react";

// Import Project component
import Project from "./Project";

// Import CSS
import "../styles/Portfolio.css";

// Import Images
import api from "../images/javascript_api.png";
import mvc from "../images/mvc.png";
import pwa from "../images/pwa.png";
import mongo from "../images/mongo.png";
import sql from "../images/sql.png";
import javascript from "../images/javascript.png";

// Portfolio Cards
export default function Portfolio() {
  return (
    <>
      <h1>My Portfolio</h1>
      <div className="portfolio-container">
        <section className="portfolio-items">
          <Project
            titleName={"Model View Controller"}
            imgLink={mvc}
            gitHubLink={"https://github.com/krgurevich/tech-bit-blog"}
            webLink={"https://tech-bit-blog.herokuapp.com/"}
          />
          <Project
            titleName={"JavaScript | Server-Side API"}
            imgLink={api}
            gitHubLink={"https://github.com/krgurevich/weather-pal"}
            webLink={"https://krgurevich.github.io/weather-pal/"}
          />
        </section>
        <hr></hr>
        <section className="portfolio-items">
          <Project
            titleName={"Progressive Web Applications"}
            imgLink={pwa}
            gitHubLink={"https://github.com/krgurevich/firefly-editor"}
            webLink={"https://firefly-editor.herokuapp.com/"}
          />
          <Project
            titleName={"MongoDB | Mongoose | API"}
            imgLink={mongo}
            gitHubLink={"https://github.com/krgurevich/epic-media"}
            webLink={
              "https://drive.google.com/file/d/1gR0vPhyUxmLTmvl2KoNUrfwnyf52uBzP/view?usp=sharing"
            }
          />
        </section>
        <hr></hr>
        <section className="portfolio-items">
          <Project
            titleName={"MySQL | Node.js | Inquirer"}
            imgLink={sql}
            gitHubLink={"https://github.com/krgurevich/hr-solutions"}
            webLink={
              "https://drive.google.com/file/d/1qU8my5WSdLkuKvRYoMRh_DVHjnVLt6R0/view?usp=sharing"
            }
          />
          <Project
            titleName={"JavaScript | Web API"}
            imgLink={javascript}
            gitHubLink={"https://github.com/krgurevich/js-maxcel"}
            webLink={"https://krgurevich.github.io/js-maxcel/"}
          />
        </section>
        <hr></hr>
      </div>
    </>
  );
}
