import React from "react";
import Undrawmovie from "../assets/undraw_movie_night_re_9umk.svg"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__description--h1">
              Reliable Up-to-date Movie Database
            </h1>
            <h2 className="header__description--h2">Search and Go</h2>
            <div className="browser__engine">
              <input id="search__list" type="text" placeholder="Browse..." />
              <div id="api-button" onclick="findMovies()">
                Go
              </div>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={Undrawmovie} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
