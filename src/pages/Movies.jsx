import React, { useEffect, useState } from "react";
import Notfound from "../assets/image_not_found.png";
import Searchbox from "../components/Searchbox";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const movies =
    location.state && location.state.movies
      ? location.state.movies.slice(0, 6)
      : [];
  const searchTerm = location.state && location.state.searchTerm;

  if (movies.length == 0) {
    console.log("No movies found.");
  } else {
    console.log("Movies found! Spliced movies: ", movies);
  }

  return (
    <div className="container movies__container">
      <div className="row movies__row">
        <Searchbox />
        <div className="movies__box">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className="movie-card" key={movie.imdbID} onClick={() => console.log('ey o')}>
                <div className="movie-card__container">
                  <div className="search-item-thumbnail">
                    <im
                      src={movie.Poster !== "N/A" ? movie.Poster : Notfound}
                      className="search-item-img"
                      alt="movie poster"
                    />
                  </div>
                  <div className="search-item-info">
                    <h3 className="search-item-h3">{movie.Title}</h3>
                    <p className="search-item-p">{movie.Year}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>{`You searched for "${searchTerm}" - No movies found.`}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
