import React from "react";

// Import CSS
import "../styles/Portfolio.css";

// Import Images
import api from "../images/javascript_api.png";
import mvc from "../images/mvc.png";
import pwa from "../images/pwa.png";
import mongo from "../images/mongo.png";
import sql from "../images/sql.png";
import javascript from "../images/javascript.png";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

// Portfolio Cards
export default function Portfolio() {
  return (
    <>
      <h1>My Portfolio</h1>
      <div className="portfolio-container">
        <section className="portfolio-items">
          <figure>
            <img src={mvc} alt="MVC" />
            <p className="card-tag">Model View Controller &#40;MVC&#41;</p>
            <a
              href="https://github.com/krgurevich/tech-bit-blog"
              target="blank" title="GitHub"
            >
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />
            </a>
            <a href="https://tech-bit-blog.herokuapp.com/" target="blank" title="Website">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
          <figure>
            <img src={api} alt="API" />
            <p className="card-tag">JavaScript | Server-Side API</p>
            <a  href="https://github.com/krgurevich/weather-pal" target="blank" title="GitHub">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />       
            </a>
            <a href="https://krgurevich.github.io/weather-pal/" target="blank" title="Website">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
        </section>
        <hr></hr>
        <section className="portfolio-items">
          <figure>
            <img src={pwa} alt="PWA" />
            <p className="card-tag">
              Progressive Web Applications &#40;PWA&#41;{" "}
            </p>
            <a
              href="https://github.com/krgurevich/firefly-editor" target="blank"
              title="GitHub"
            >
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />
            </a>
            <a href=" https://firefly-editor.herokuapp.com/" target="blank" title="Website">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
          <figure>
            <img src={mongo} alt="NonSQL" />
            <p className="card-tag">NoSQL | MongoDB | Mongoose ODM | API</p>
            <a href="https://github.com/krgurevich/epic-media" target="blank" title="GitHub">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1gR0vPhyUxmLTmvl2KoNUrfwnyf52uBzP/view?usp=sharing"
              target="blank" title="Website"
            >
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
        </section>
        <hr></hr>
        <section className="portfolio-items">
          <figure>
            <img src={sql} alt="SQL" />
            <p className="card-tag">SQL | MySQL | Node.js | Inquirer</p>
            <a href="https://github.com/krgurevich/hr-solutions" target="blank" title="GitHub">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1qU8my5WSdLkuKvRYoMRh_DVHjnVLt6R0/view?usp=sharing"
              target="blank" title="Website"
            >
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
          <figure>
            <img src={javascript} alt="JavaScript" />
            <p className="card-tag">JavaScript | Web API</p>
            <a href="https://github.com/krgurevich/js-maxcel" target="blank" title="GitHub">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGithub}
              />
            </a>
            <a href="https://krgurevich.github.io/js-maxcel/" target="blank" title="Website">
              <FontAwesomeIcon
                className="card-attr font-awesome"
                icon={faGlobe}
              />
            </a>
          </figure>
        </section>
        <hr></hr>
      </div>
    </>
  );
}
