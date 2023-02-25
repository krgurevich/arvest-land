import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faPinterest,
} from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://github.com/krgurevich" title="GitHub">
            <FontAwesomeIcon className="font-awesome" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/" title="LinkedIn">
            <FontAwesomeIcon className="font-awesome" icon={faLinkedin} />
          </a>
          <a href="https://www.pinterest.com/kgurevich74/" title="LinkedIn">
            <FontAwesomeIcon className="font-awesome" icon={faPinterest} />
          </a>
        </div>
        <p className="footer-p">&copy;2023 Arvest Land | All Rights Reserved</p>
      </footer>
    </>
  );
}
