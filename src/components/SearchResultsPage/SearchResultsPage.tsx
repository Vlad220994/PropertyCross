import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NumberOfMatches from "../NumberOfMatches/NumberOfMatches";
import Results from "../Results/Results";
import "./searchResultsPage.scss";

const SearchResultsPage = ({ property }) => {
  return (
    <main className="main">
      <div className="container">
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Home
          </button>
        </Link>
        <h2 className="container__heading">{property.location.longTitle}</h2>
        <NumberOfMatches results={property.properties.length} />
      </div>
      <Results property={property} />
    </main>
  );
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.properties
});

export default connect(mapStateToProps)(SearchResultsPage);
