import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";

const MovieInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const loadingTimer = setTimeout(async () => {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=1c44ead`
        );
        setMovieInfo(response.data);
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(loadingTimer);
    };
    fetchMovieInfo();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading__container">
        <div className="loading">
          <FontAwesomeIcon icon="fa-solid fa-circle-notch" />
        </div>
      </div>
    );
  }

  return (
    <section id="movie__info" className="up__padding">
      <button
        className="back-btn back__movie-info"
        onClick={() => navigate("/movies")}
      >
        ← Back
      </button>
      <div className="movie-details-container">
        <div className="movie-poster">
          <img
            src={
              movieInfo.enPoster !== "N/A"
                ? movieInfo.Poster
                : "./assets/image_not_found.png"
            }
            alt="movie poster"
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movieInfo.Title}</h3>
          <Rating rating={movieInfo.imdbRating} />
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
              <FontAwesomeIcon icon="fa-solid fa-award" />
            </b>{" "}
            {movieInfo.Awards}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
