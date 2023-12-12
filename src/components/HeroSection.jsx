import React from "react";
import Undrawmovie from "../assets/undraw_movie_night_re_9umk.svg";
import { useNavigate } from "react-router-dom";
import Searchbox from "./Searchbox";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="row hero_row">
        <div className="container hero__container">
          <div className="hero__description">
            <h1 className="hero__description--h1">
              Reliable Up-to-date Movie Database
            </h1>
            <h2 className="hero__description--h2">Search and Go</h2>
            <Searchbox />
          </div>
          <figure className="hero__img--wrapper">
            <img className="hero-img" src={Undrawmovie} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
