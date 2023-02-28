import React from "react";

import "../styles/Portfolio.css";

import javascript from "../images/javascript.png";
import api from "../images/server-side-api.png";
import html from "../images/htmlcss.png";
import mvc from "../images/mvc.png";
import pwa from "../images/pwa.png";
import planner from "../images/planner.png";

export default function Portfolio() {
  return (
    <>
      <h1>My Portfolio</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={javascript} alt="Card cap" />
              <div class="card-body">
                <p className="card-text">JavaScript</p>
                <a
                  href="https://github.com/krgurevich/js-maxcel"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://krgurevich.github.io/js-maxcel/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={api} alt="ServerSideAPI" />
              <div className="card-body"></div>
              <div class="card-body">
                <p className="card-text">Server Side API</p>
                <a
                  href="https://github.com/krgurevich/weather-pal"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://krgurevich.github.io/weather-pal/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={html} alt="Card cap" />
              <div className="card-body"></div>
              <div class="card-body">
                <p className="card-text">Front End HTML / CSS</p>
                <a
                  href="https://github.com/krgurevich/www-arvest-portfolio"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://krgurevich.github.io/www-arvest-portfolio/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={planner} alt="Card cap" />
              <div className="card-body"></div>
              <div class="card-body">
                <p className="card-text">Express</p>
                <a
                  href="https://github.com/krgurevich/pro-schedus"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://krgurevich.github.io/pro-schedus/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={mvc} alt="Card cap" />
              <div className="card-body"></div>
              <div class="card-body">
                <p className="card-text">Model-View-Controller</p>
                <a
                  href="https://github.com/krgurevich/tech-bit-blog"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://tech-bit-blog.herokuapp.com/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={pwa} alt="Card cap" />
              <div className="card-body"></div>
              <div class="card-body">
                <p className="card-text">Progressive Web Applications</p>
                <a
                  href="https://github.com/krgurevich/firefly-editor"
                  className="card-link"
                >
                  GitHub
                </a>
                <a
                  href="https://firefly-editor.herokuapp.com/"
                  className="card-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
