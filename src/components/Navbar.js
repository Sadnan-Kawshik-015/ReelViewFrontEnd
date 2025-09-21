import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faFilm} /> ReelView
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/watchList" className="nav-link">
                Watch List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/all" className="nav-link">
                All Movies
              </NavLink>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex">
            <button 
            className="btn btn-outline-info me-2"
            onClick={() => navigate('/login')}
            >Login</button>
            <button className="btn btn-outline-info"
            onClick={() => navigate('/register')}
            >Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
