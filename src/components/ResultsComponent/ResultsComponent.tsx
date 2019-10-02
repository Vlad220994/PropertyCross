import * as React from "react";
import { Link } from "react-router-dom";

export const ResultsComponent = ({property}) => {
  const { properties = [], location="" } = property;

  const buildings = properties.map((item, i) => {
    const { id, imgUrl, priceFormatted, summary, title } = item;
    return (
      <li className="results__element" key={id+i}>
        <div className="container">
          <div className="image-block">
            <img src={imgUrl} className="image-block__image" alt={title} />
          </div>
          <div className="container-info">
            <Link to={`/cities/${location.placeName}/${id}`}>
              <h1 className="container-info__heading-title">{title}</h1>
            </Link>
            <h2 className="container-info__heading-price">
              {priceFormatted}
            </h2>
            <p className="container-info__paragraph">
              {summary}
            </p>
          </div>
        </div>
      </li>
    );
  });

  return(
    <ul className="results">
      {buildings}
    </ul>
  );
};

