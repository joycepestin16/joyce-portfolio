import React from 'react'
import '../styles/Navbar.css';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" stick>
        <div className="container-fluid">
          <a className="navbar-brand offset-lg-1" aria-current="page"  href="#">JAVP.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse offset-lg-7" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#work">WORK</a>
              <a className="nav-link" href="#about">ABOUT</a>
              <a className="nav-link" href="#contact">CONTACT</a>
            
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar