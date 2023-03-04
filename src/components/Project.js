import React from "react";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

const Project = ({ titleName, webLink, gitHubLink, imgLink }) => {
  return (
    <figure>
      <img src={imgLink} alt={titleName} />
      <p className="card-tag">{titleName}</p>
      <a href={gitHubLink} target="blank" title="GitHub">
        <FontAwesomeIcon className="card-attr font-awesome" icon={faGithub} />
      </a>
      <a href={webLink} target="blank" title="Website">
        <FontAwesomeIcon className="card-attr font-awesome" icon={faGlobe} />
      </a>
    </figure>
  );
};

export default Project;
