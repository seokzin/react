import React from "react";

const Card = ({ movie, removeMovie }) => {
  return (
    <div className="movie">
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-year">{movie.year}</p>
      <button onClick={() => removeMovie(movie.id)}>X</button>
    </div>
  );
};

export default Card;
