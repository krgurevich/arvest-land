import React from "react";
import "../styles/Resume.css";

import resume from "../misc/Resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/fontawesome-free-solid";

export default function Resume() {
  return (
    <>
      <h1>My Resume</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h2>Front-End</h2>
            <ul class="list-group">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">Advanced CSS</li>
              <li class="list-group-item">Responsive Design</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">jQuery</li>
              <li class="list-group-item">React.js</li>
              <li class="list-group-item">APIs</li>
            </ul>
          </div>
          <div className="col-md-6 mb-5">
            <h2>Back-End</h2>
            <ul class="list-group">
              <li class="list-group-item">Node.js / Express.js / Jest</li>
              <li class="list-group-item">SQL / MySQL / Sequelize</li>
              <li class="list-group-item">No SQL / MongoDB / Mongoose</li>
              <li class="list-group-item">Object-Relational Mapping</li>
              <li class="list-group-item">Model View Controller</li>
              <li class="list-group-item">Progressive Web Applications</li>
              <li class="list-group-item">MERN Stack / GraphQL / State</li>
            </ul>
          </div>
        </div>
        <p className="download">
          Download Resume&nbsp;
          <a href={resume} download>
            <FontAwesomeIcon className="font-awesome" icon={faDownload} />
          </a>
        </p>
      </div>
    </>
  );
}
