import * as React from "react";
import { Link } from "react-router-dom";

import "./listedLocation.scss";

export const ListedLocation = ({ cities }) => {

  const city = cities.map((item, i) => {
    const { longTitle, placeName } = item;

    return (
      <Link to={`/cities/${placeName}`} key={longTitle + i}>
        <li className="listed-location__list">
          <span className="listed-location__search">Search </span>
          <span className="listed-location__number">#{i + 1} </span>
          <span className="listed-location__title">{longTitle}</span>
        </li>
      </Link>
    );
  });

  return (
    <section className="listed-location">
      <h2 className="listed-location__heading">
        Please select a location below
      </h2>
      <div className="listed-location__block1">
        <ul className="listed-location__block2">
          {city}
        </ul>
      </div>
    </section>
  );
};
