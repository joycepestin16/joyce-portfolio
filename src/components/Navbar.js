import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a
            className="navbar-brand offset-lg-1 navbrand"
            aria-current="page"
            href="#"
          >
            JAVP.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse offset-lg-7"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link nav-heading offset-lg-2" href="#work">
                Projects
              </a>
              <a className="nav-link nav-heading offset-lg-2" href="#about">
                About
              </a>
              <a className="nav-link nav-heading offset-lg-2" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
