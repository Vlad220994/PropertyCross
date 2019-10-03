import * as React from "react";
import { connect } from "react-redux";

import { SearchResultsPageComponent } from "../../components/SearchResultsPageComponent/SearchResultsPageComponent";
import { searchProperty } from "../../actions/getPropertyAction";
import "./searchResultsPage.scss";

const SearchResultsPage = ({ property, searchProperty, totalProperties }) => {
  return (
    <SearchResultsPageComponent property={property} searchProperty={searchProperty} />
  );
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.getProperties,
  totalProperties: state.getPropertyReducer.getProperties.totalProperties
});

const mapDispatchToProps = () => ({
  searchProperty
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
