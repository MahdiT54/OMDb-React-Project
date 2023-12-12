import React, { useEffect, useState } from "react";
import Notfound from "../assets/image_not_found.png";
import Searchbox from "../components/Searchbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movies = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const movies =
    location.state && location.state.movies
      ? location.state.movies.slice(0, 9)
      : [];
  const searchTerm = location.state && location.state.searchTerm;

  useEffect(() => {
    setLoading(true);

    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(delay); // avoid memory leaks cleanup
  }, [searchTerm]);

  if (movies.length == 0) {
    console.log("No movies found.");
  } else {
    console.log("Movies found! Spliced movies: ", movies);
  }

  return (
    <section id="movies" className="movies">
      <div className="row movies__row">
        <div className="container movies__container">
          <div className="movie__remote">
            <button
              className="back-btn back__movies"
              onClick={() => navigate("/")}
            >
              ← Back
            </button>
            <Searchbox />
          </div>
          <div className="movies__box">
            {loading ? (
              <div className="loading__container">
                <div className="loading">
                  <FontAwesomeIcon icon="fa-solid fa-circle-notch" />
                </div>
              </div>
            ) : movies.length > 0 ? (
              movies.map((movie) => (
                <Link to={`/movies/${movie.imdbID}`}>
                  <div className="movie-card" key={movie.imdbID}>
                    <div className="movie-card__container">
                      <div className="search-item-thumbnail">
                        <img
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
                </Link>
              ))
            ) : (
              <h2>{`You searched for "${searchTerm}" - No movies found.`}</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
