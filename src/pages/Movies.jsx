import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?s=fast&apikey=1c44ead"
    );
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const displayedMovies = movies.slice(0, 6);

  return (
    <div className="container movies__container">
      <div className="row movies__row">
        {displayedMovies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <div className="movie-card__container">
              <div className="movie-poster">
                <div className="search-item-thumbnail">
                  <img
                    src={movie.Poster}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
