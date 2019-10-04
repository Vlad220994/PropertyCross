import * as React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import { FAVORITE_PROPERTIES } from "../../constants/favoritesConstants";
import './favorites.scss';

export const Favorites = () => {
  
  const favoritesArray = JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [];
  const favoriteLocations = favoritesArray.map((item, i) => {
    const { location, value, id, title, imgUrl, price } = item;

    return(
      <li className="list-block__elem" key={id+i}>
        <div className="image-block">
          <img src={imgUrl} alt={title} className="image-block__image" />
        </div>
        <div className="info-block">
          <p className="list-block__value">{value}</p>
          <Link to={`/cities/${location}/${id}`}>
            <h2 className="list-block__title">{title}</h2>
          </Link>
          <p className="list-block__price">{price}</p>
        </div>
      </li>
    );
  });

  return(
    <Fragment>
      <header className="header-block">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <h2 className="header-block__heading">Favorites</h2>
      </header>
      <main className="main-block">
        <ul className="list-block">
          {favoriteLocations}
        </ul>
      </main>
    </Fragment>
  )
};
