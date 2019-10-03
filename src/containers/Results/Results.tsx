import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import { ResultsComponent } from '../../components/ResultsComponent/ResultsComponent';
import { searchProperties } from "../../actions/getPropertyAction";
import "./results.scss";

const defaultPageSize = 10;

const Results = ({ property, searchProperties, match }) => {
  const { totalResults, page } = property;
  const [currentPage, setPage] = useState(page);
  const pagesCount = Math.ceil(totalResults / defaultPageSize);

  useEffect(() => {
    searchProperties(match.params.city, currentPage);
  }, [currentPage]);

  const getCurrentPage = (page) => {
      setPage(page);
  };

  return <ResultsComponent property={property} pagesCount={pagesCount} getCurrentPage={getCurrentPage} />;
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.getProperties
});

const mapDispatchToProps = {
  searchProperties
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
