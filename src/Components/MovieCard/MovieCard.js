import React from 'react';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({movie:{name,rating,image,description}}) => {
  // // destructuring normal de la props
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li> {rating} </li>
            <li>||</li>
            <li>{description}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate  />
        </div>
        <div className="card_right__review">
          <p></p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
