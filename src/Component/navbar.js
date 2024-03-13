// import React, { useState, useRef } from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  // const navRef = useRef(null);
  // const navi = navRef.current;
  return (
      <nav class="navbar bg bg-dark navbar-expand-md navbar-dark navstyle sticky-top">
      <div class="container">
        <a class="navbar-brand text-warning" href="/myporto">
          Tek kheng
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">s
            <Router>
            <li className="nav-item">
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="#section"
              >
                Home
              </a> */}
              <Link className="nav-link active" aria-current="page" to="/myporto">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
              <Link className="nav-link" to="#about">About</Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
              <Link className="nav-link" to="#project">Project</Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
              <Link className="nav-link" to="#contact">Contact</Link>
              {/* </a> */}
            </li>
          </Router>
          </ul>   
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
