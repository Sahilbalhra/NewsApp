import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link active" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Genral">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            About
          </Link>
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
