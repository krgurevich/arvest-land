import React from "react";
import "../styles/Header.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <>
      {/* Navigation bar */}
      <header class="header">
        {/* Logo */}
        <p className="logo">Kristina Gurevich</p>
        {/* Bar Icon */}
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="bar" for="side-menu">
          <span className="bar-line"></span>
        </label>
        {/* Menu */}
        <nav className="nav">
          <ul className="menu">
            <li
              className={currentPage === "Home" ? "active" : ""}
              onClick={() => {
                handlePageChange("Home");
              }}
            >
              Home
            </li>
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
              className={currentPage === "Contact" ? "active" : ""}
              onClick={() => {
                handlePageChange("Contact");
              }}
            >
              Contact Me
            </li>
            <li
              className={currentPage === "Resume" ? "active" : ""}
              onClick={() => {
                handlePageChange("Resume");
              }}
            >
              My Resume
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}