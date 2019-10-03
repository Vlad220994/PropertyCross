import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import { ResultsComponent } from '../../components/ResultsComponent/ResultsComponent';
import { searchProperties } from "../../actions/getPropertyAction";
import "./results.scss";

const Results = ({ property, searchProperties, match }) => {
  const { totalProperties, pageSize, currentPage } = property;

  let pagesCount = Math.ceil(totalProperties / pageSize);
  console.log(pagesCount);

  useEffect(() => {
    searchProperties(match.params.city, currentPage);
  }, []);

  return <ResultsComponent property={property} pagesCount={pagesCount} />;
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.getProperties
});

const mapDispatchToProps = {
  searchProperties
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
