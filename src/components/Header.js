import React from "react";
import "../styles/Header.css";

import profile from "../images/profile_picture.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <div className="logo-container">
          <p className="logo">Kristina Gurevich</p>
          <img className="logo-img" src={profile} alt="Kristina"></img>
        </div>
        <ul className="main-nav" id="js-menu">
          <li
            className={currentPage === "About" ? "active" : ""}
            onClick={() => {
              handlePageChange("About");
            }}
          >
            About Me
          </li>
          <li
            className={currentPage === "Portfolio" ? "active" : ""}
            onClick={() => {
              handlePageChange("Portfolio");
            }}
          >
            My Portfolio{" "}
          </li>
          <li
            className={currentPage === "Resume" ? "active" : ""}
            onClick={() => {
              handlePageChange("Resume");
            }}
          >
            My Resume
          </li>
          <li
            className={currentPage === "Contact" ? "active" : ""}
            onClick={() => {
              handlePageChange("Contact");
            }}
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </>
  );
}
