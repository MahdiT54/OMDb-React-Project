import React from "react";
import Undrawmovie from "../assets/undraw_movie_night_re_9umk.svg";
import { useNavigate } from "react-router-dom";
import Searchbox from "./Searchbox";

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
            <Searchbox />
          </div>
          <figure className="header__img--wrapper">
            <img className="header-img" src={Undrawmovie} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
