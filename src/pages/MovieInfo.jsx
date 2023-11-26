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

  return (
    <div>
      {movieInfo ? (
        <div>
          <h1>{movieInfo.Title}</h1>
          {/* Display other movie information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieInfo;
