import * as React from "react";
import { connect } from "react-redux";

import "./recentSearches.scss";

const RecentSearches = ({ historyCities }) => {
  const locationReverse = historyCities.reverse().filter((item, i) => i < 10);

  const location = locationReverse.map((item, i) => {
    const { id, title } = item;

    return (
      <li className="location-list__elem" key={id + i}>
        <span className="location-list__elem1">{title} </span>
        <span className="location-list__elem2">{i + 1}</span>
      </li>
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
