import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar); // as we scroll, its going to trigger transitionNavBar
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`${show && "nav__scroll"}`}>
      <div className="nav__container">
        <Link to="/" className="logo__link">
          <div className="nav__logo">
            <h1>
              OMDb<span className="teal-gradient">Go</span>
            </h1>
          </div>
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
