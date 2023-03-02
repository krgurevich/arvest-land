import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://github.com/krgurevich" title="GitHub">
            <FontAwesomeIcon className="font-awesome" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/kristinagurevich"
            title="LinkedIn"
          >
            <FontAwesomeIcon className="font-awesome" icon={faLinkedin} />
          </a>
          <a
            href="https://stackoverflow.com/users/5128386/kristina-g"
            title="Stackoverflow"
          >
            <FontAwesomeIcon className="font-awesome" icon={faStackOverflow} />
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 Kristina Gurevich | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
