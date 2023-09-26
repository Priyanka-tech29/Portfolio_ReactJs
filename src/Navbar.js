import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              Priyanka
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/">
                  <a class="nav-link " href="#">
                    <i class="uil uil-estate"></i>
                    Home
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">
                  <a class="nav-link" href="#">
                    <i class="uil uil-diary"></i>
                    About
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">
                  <a class="nav-link" href="#">
                    <i class="uil uil-envelope-check"></i>
                    Contact
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/news">
                  <a class="nav-link" href="#">
                    <i class="uil uil-newspaper"></i>
                    News
                  </a>
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <Link to="/signup"> 
                <button class="btn btn-style" type="submit">
                  Sign Up
                </button>
                </Link>
                <Link to="/login">
                <button class=" btn-style btn-style-border" type="submit">
                  Log In
                </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
