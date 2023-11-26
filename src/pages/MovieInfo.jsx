import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=1c44ead`
      );
      setMovieInfo(response.data);
    };
    fetchMovieInfo();
  }, [id]);

  if (!movieInfo) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <section id="movie__info">
      <div className="movie-details-container">
        <div className="movie-poster">
          <img
            src={
              movieInfo.Poster !== "N/A"
                ? movieInfo.Poster
                : "./assets/image_not_found.png"
            }
            alt="movie poster"
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movieInfo.Title}</h3>
          <ul className="movie-misc-info">
            <li className="year">Year: {movieInfo.Year}</li>
            <li className="rated">Ratings: {movieInfo.Rated}</li>
            <li className="released">Released: {movieInfo.Released}</li>
          </ul>
          <p className="genre">
            <b>Genre:</b> {movieInfo.Genre}
          </p>
          <p className="writer">
            <b>Writer:</b> {movieInfo.Writer}
          </p>
          <p className="actors">
            <b>Actors:</b> {movieInfo.Actors}
          </p>
          <p className="plot">
            <b>Plot:</b> {movieInfo.Plot}
          </p>
          <p className="language">
            <b>Language:</b> {movieInfo.Language}
          </p>
          <p className="awards">
            <b>
              {" "}
              <i className="fas fa-award"></i>
            </b>{" "}
            {movieInfo.Awards}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
