import * as React from "react";
import { connect } from "react-redux";

import  { RecentSearchesComponent } from '../../components/RecentSearchesComponent/RecentSearchesComponent';
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
    <RecentSearchesComponent location={location} />
  );
};

const mapStateToProps = state => ({
  historyCities: state.searchCityReducer.historyCities
});

export default connect(mapStateToProps)(RecentSearches);
