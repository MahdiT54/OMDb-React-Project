import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo">
          <h1>
            Movie<span className="teal-gradient">Go</span>
          </h1>
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/movies" className="nav__link">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
