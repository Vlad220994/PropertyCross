import * as React from "react";
import { Router, Route } from "react-router-dom";

import PropertySearch from "../PropertySearch/PropertySearch";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";
import PropertyListingPage from "../PropertyListingPage/PropertyListingPage";

const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Route exact path="/" component={PropertySearch} />
      <Route exact path="/:city" component={SearchResultsPage} />
      <Route exact path="/:city/:id" component={PropertyListingPage} />
    </Router>
  );
};

export default Routes;
