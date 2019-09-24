import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { searchProperty } from "../../actions/getPropertyAction";
import "./listedLocation.scss";

const ListedLocation = ({ cities, searchProperty }) => {

  const city = cities.map((item, i) => {
    const { longTitle, id, placeName } = item;

    return (
      <Link to={`/${placeName}`} onClick={() => searchProperty(placeName)} key={id+i}>
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

const mapDispatchToProps = {
  searchProperty
};

export default connect(
  null,
  mapDispatchToProps
)(ListedLocation);
