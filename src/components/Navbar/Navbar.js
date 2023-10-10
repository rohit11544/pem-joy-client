import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-fixed">
        <div className="container-fluid">
          {/* <a className="navbar-brand " href="aboutus"> */}
          <h3 style={{ color: 'white' }}>ALOK</h3>
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="aboutus">
                  AboutUs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="services">
                  Services
                </a>
              </li> */}
            </ul>
            <button
              className="btn btn-outline-white btn-success"
              type="submit"
              disabled
            >
              Welcome!!!
            </button>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </nav>
    </>
  );
}
