import React from "react";
import "./Movie.css";
import Rate from "./Rate";
import {Link} from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="film">
        <Link to={`/Movied/${movie.id}`}><img src={movie.poster} alt={movie.title}  /></Link>
        <div className="description">
          <h2>{movie.title}</h2> <br />
          <br />
          <br />
          <div className="watching">
            <div className="">
              <Rate rating={movie.rate} />
            </div>
            <a href={movie.url} target="_blank" rel="noreferrer">
              <button>Watch the Movie</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
