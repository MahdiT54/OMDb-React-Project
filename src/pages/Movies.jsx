import React, { useEffect, useState } from "react";
import Searchbox from "../components/Searchbox";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movie from "../components/ui/Movie";

const Movies = () => {
  const [moviesdefault, setMoviesdefault] = useState();
  let navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const movies =
    location.state && location.state.movies
      ? location.state.movies.slice(0, 8)
      : [];
  const searchTerm = location.state && location.state.searchTerm;

  useEffect(() => {
    setLoading(true);

    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(delay); // avoid memory leaks cleanup
  }, [searchTerm]);

  if (movies.length === 0) {
    console.log("No movies found.");
  } else {
    console.log("Movies found! Spliced movies: ", movies);
  }

  function filterMovies(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setMoviesdefault(moviesdefault.slice().sort((a, b) => a.Year - b.Year));
    }
    if (filter === "HIGH_TO_LOW") {
      setMoviesdefault(moviesdefault.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === "RATING") {
      setMoviesdefault(
        moviesdefault.slice().sort((a, b) => b.imdbRating - a.imdbRating)
      );
    }
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
            <div className="row browser__engine--row">
              <Searchbox />
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterMovies(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="LOW_TO_HIGH">Year, Low to High</option>
                <option value="HIGH_TO_LOW">Year, High to Low</option>
                <option value="RATING">Rating</option>
              </select>
            </div>
          </div>
          <div className="movies__box">
            {loading ? (
              <div className="loading__container">
                <div className="loading">
                  <FontAwesomeIcon icon="fa-solid fa-circle-notch" />
                </div>
              </div>
            ) : movies.length > 0 ? (
              movies.map(
                (
                  movie // movies array --> (movie) element
                ) => <Movie movie={movie} key={movie.imdbID} />
              )
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
