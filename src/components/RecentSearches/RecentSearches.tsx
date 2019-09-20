import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { searchProperty } from "../../actions/getPropertyAction";
import "./recentSearches.scss";

const RecentSearches = ({ historyCities, searchProperty }) => {
  const locationReverse = historyCities.reverse().filter((item, i) => i < 10);

  const location = locationReverse.map((item, i) => {
    const { value, count, city } = item;
    const onClick = () => () => {
      searchProperty(city);
    };

    return (
      <Link to={`/${city}`} onClick={onClick()}>
        <li className="location-list__elem" key={value}>
          <span className="location-list__elem1" key={value + count}>
            {value}{" "}
          </span>
          <span className="location-list__elem2" key={value + i}>
            ({count})
          </span>
        </li>
      </Link>
    );
  });

  return (
    <section className="recent-searches">
      <h2 className="recent-searches__heading">Recent Searches</h2>
      <div className="recent-searches__block1">
        <ul className="location-list">{location}</ul>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  searchProperty
};

const mapStateToProps = state => ({
  historyCities: state.searchCityReducer.historyCities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentSearches);
