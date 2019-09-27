import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NumberOfMatches from "../NumberOfMatches/NumberOfMatches";
import Results from "../Results/Results";
import { searchProperty } from "../../actions/getPropertyAction";
import "./searchResultsPage.scss";

const SearchResultsPage = ({ property, searchProperty }) => {
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
      <Results property={property} searchProperty={searchProperty} />
    </main>
  );
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.properties
});

const mapDispatchToProps = () => ({
  searchProperty
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
