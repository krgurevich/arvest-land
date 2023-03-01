import React from "react";

import "../styles/Portfolio.css";

import api from "../images/javascript_api.png";
import mvc from "../images/mvc.png";
import pwa from "../images/pwa.png";
import mongo from "../images/mongo.png";
import sql from "../images/sql.png";
import javascript from "../images/javascript.png";

export default function Portfolio() {
  return (
    <>
      <h1>My Portfolio</h1>
      <div className="portfolio-container">
        <section className="portfolio-items">
          <figure>
              <img src={mvc} alt="MVC" />
          </figure>
          <figure>
              <img src={api} alt="API" />
          </figure>
        </section>
        <section className="portfolio-items">
          <figure>
              <img src={pwa} alt="PWA" />
          </figure>
          <figure>
              <img src={mongo} alt="NonSQL" />
          </figure>
        </section>
        <section className="portfolio-items">
          <figure>
              <img src={sql} alt="SQL" />
          </figure>
          <figure>
              <img src={javascript} alt="JavaScript" />
          </figure>
        </section>
      </div>
    </>
  );
}
