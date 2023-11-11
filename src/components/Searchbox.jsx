import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(null);

  const handleButtonClick = async () => {
    const searchListValue = document.getElementById("search__list").value;
    setSearchTerm(searchListValue); // useState searchTerm is set to the value inside search__list
    const apiUrl = `http://www.omdbapi.com/?apikey=1c44ead&s=${searchListValue}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    if (searchListValue != "") {
      setNoResults(false);
      navigate("/movies", {
        state: { movies: data.Search, searchTerm: searchListValue },
      });
      console.log("Pre-spliced movies from searchbox: ", data);
    } else {
      setNoResults(true);
      setTimeout(() => {
        setNoResults(false);
      }, 1500);
    }
  };

  return (
    <div className="browser__engine">
      <input id="search__list" type="text" placeholder="Browse..." />
      <div id="api-button" onClick={handleButtonClick}>
        {noResults ? <h2>Empty</h2> : <h2>Go</h2>}
      </div>
    </div>
  );
};

export default Searchbox;
