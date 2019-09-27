import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import { searchProperty } from "../../actions/getPropertyAction";
import "./results.scss";

const ResultsComponent = ({ property, searchProperty, match }) => {
  const { properties = [], location="" } = property;

  useEffect(() => {
    searchProperty(match.params.city);
    console.log(match.params.city);
  }, []);

  const buildings = properties.map((item, i) => {
      const { id, imgUrl, priceFormatted, summary, title } = item;
      return (
        <li className="results__element" key={id+i}>
          <div className="container">
            <div className="image-block">
              <img src={imgUrl} className="image-block__image" alt={title} />
            </div>
            <div className="container-info">
              <Link to={`/${location.placeName}/${id}`}>
                <h1 className="container-info__heading-title">{title}</h1>
              </Link>
              <h2 className="container-info__heading-price">
                {priceFormatted}
              </h2>
              <p className="container-info__paragraph">{summary}</p>
            </div>
          </div>
        </li>
      );
  });

  return <ul className="results">{buildings}</ul>;
};

const mapDispatchToProps = {
    searchProperty
};

export default withRouter(connect(null, mapDispatchToProps)(ResultsComponent));
