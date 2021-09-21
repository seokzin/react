import React from "react";

const Card = (props) => {
  return (
    <div className="movie">
      <h3 className="movie-title">{props.movie.title}</h3>
      <p className="movie-year">{props.movie.year}</p>
    </div>
  );
};

export default Card;
