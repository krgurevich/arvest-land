import React, { useState } from "react";

// Import CSS
import "../styles/Header.css";

// Import Profile Image
import profile from "../images/profile_picture.png";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Set State for Current Page and Handle Page Change
export default function Header({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Navbar including mobile design functionality
    <>
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </span>
        <div className="logo-container">
          <p className="logo">Kristina Gurevich</p>
          <img className="logo-img" src={profile} alt="Kristina"></img>
        </div>
        <ul className="main-nav" id="js-menu" style={{display: isOpen &&"block"}}>
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
