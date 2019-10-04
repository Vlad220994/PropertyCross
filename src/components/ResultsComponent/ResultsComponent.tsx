import * as React from "react";
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export const ResultsComponent = ({ property, pagesCount, getCurrentPage }) => {
  const { properties , location } = property;

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
    <Fragment>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={
          (val) => (
            getCurrentPage(val.selected+1)
          )
        }
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        pageClassName="page-class-name"
        previousClassName="previousClassName"
        nextClassName="nextClassName"
        previousLinkClassName="previousLinkClassName"
      />
      <ul className="results">
        {buildings}
      </ul>
    </Fragment> 
  );
};