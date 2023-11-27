import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="fa-solid fa-star" key={index} />
      ))}
      {!Number.isInteger(rating) && <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />}
    </div>
  );
};

export default Rating;
