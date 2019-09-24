import * as React from "react";
import { connect } from "react-redux";

import "./recentSearches.scss";

const RecentSearches = ({ historyCities, onClickHistory }) => {
  const locationFilter = historyCities.filter((item, i) => i < 10);

  const location = locationFilter.map((item, i) => {
    const { value, titleCity, count } = item;

    return (
      <li
        className="location-list__elem"
        key={value}
        onClick={() => onClickHistory(titleCity.title)}
      >
        <span className="location-list__elem1">
          {value}{" "}
        </span>
        <span className="location-list__elem2">
          Request: "{titleCity.title}"
        </span>
        <span className="location-list__elem3">
          ({count})
        </span>
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
