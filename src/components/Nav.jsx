import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
    return (
        <nav>
      <div class="nav__container">
        <div class="nav__logo">
          <h1>Movie<span class="teal-gradient">Go</span></h1>
        </div>
        <ul class="nav__links">
          <li class="nav__list">
            <a href="/" class="nav__link"> Home </a>
          </li>
          <li class="nav__list">
            <a href="#about" class="nav__link"> About </a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Nav;
