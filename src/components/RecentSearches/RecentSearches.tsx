import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./recentSearches.scss";

const RecentSearches = ({ historyCities }) => {
  const locationReverse = historyCities.reverse().filter((item, i) => i < 10);

  const location = locationReverse.map((item, i) => {
    const { value, count } = item;

    return (
      <Link to="/search-results-page">
        <li className="location-list__elem" key={value + i}>
          <span className="location-list__elem1">{value} </span>
          <span className="location-list__elem2">({count})</span>
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

const mapStateToProps = state => ({
  historyCities: state.searchCityReducer.historyCities
});

export default connect(mapStateToProps)(RecentSearches);
