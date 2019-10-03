import * as React from "react";
import { Fragment } from 'react';
import { Link } from "react-router-dom";

export const ResultsComponent = ({ property, pagesCount }) => {
  const { properties , location, totalProperties, pageSize, currentPage } = property;
  // console.log("property", property);
  // console.log(pageSize);
  // console.log(currentPage);
  // console.log("totalProperties", totalProperties);
  // console.log("properties.length", properties.length);

  //let pagesCount = totalProperties / pageSize;
  //console.log("pagesCount", pagesCount);
  let pages = [];
  //console.log(pages);
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //console.log(pages);
  

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

  const pagination = pages.map((item, i) => {
    return <li key={item + i}>{item}</li>
  });

  return(
    <Fragment>
      <ul>
        {pagination}
      </ul>
      <ul className="results">
        {buildings}
      </ul>
    </Fragment> 
  );
};
