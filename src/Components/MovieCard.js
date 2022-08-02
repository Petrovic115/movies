import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <div className="card-holder">
        <div className="img-holder">
          <img src={props.img} alt="movie" />
        </div>
        <div className="card-content">
          <h1 className="title">{props.title}</h1>
          <h2 className="description">{props.description}</h2>
          <span className="published">{props.published}</span>
          <span className="dash">/</span>
          <span className="rating">{props.rating}</span>
          <span className="star">/5</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
