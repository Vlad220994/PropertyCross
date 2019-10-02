import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import { ResultsComponent } from '../../components/ResultsComponent/ResultsComponent';
import { searchProperties } from "../../actions/getPropertyAction";
import "./results.scss";

const Results = ({ property, searchProperties, match }) => {
  
  useEffect(() => {
    searchProperties(match.params.city);
  }, []);

  return <ResultsComponent property={property} />;
};

const mapDispatchToProps = {
  searchProperties
};

export default withRouter(connect(null, mapDispatchToProps)(Results));
