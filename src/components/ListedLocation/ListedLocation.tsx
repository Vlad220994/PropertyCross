import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { searchProperty } from "../../actions/getPropertyAction";
import "./listedLocation.scss";

const ListedLocation = ({ cities, searchProperty }) => {
  const onLongTitle = placeName => {
    searchProperty(placeName);
  };

  const city = cities.map((item, i) => {
    const { longTitle, id, placeName } = item;

    return (
      <tr className="listed-location__list" key={id}>
        <Link to={`/${placeName}`} onClick={() => onLongTitle(placeName)}>
          <td>
            <span className="listed-location__search">Search </span>
            <span className="listed-location__number">#{i + 1} </span>
          </td>
          <td>
            <span className="listed-location__title">{longTitle}</span>
          </td>
        </Link>
      </tr>
    );
  });

  return (
    <section className="listed-location">
      <h2 className="listed-location__heading">
        Please select a location below
      </h2>
      <div className="listed-location__block1">
        <table className="listed-location__block2">
          <tbody>{city}</tbody>
        </table>
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
