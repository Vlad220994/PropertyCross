import * as React from "react";
import { Router, Route } from "react-router-dom";

import { Favorites } from "../Favorites/Favorites";
import PropertySearch from "../PropertySearch/PropertySearch";
import SearchResultsPage from "../../containers/SearchResultsPage/SearchResultsPage";
import PropertyListingPage from "../../containers/PropertyListingPage/PropertyListingPage";
import MyLocationComponent from "../../containers/MyLocation/MyLocation";

const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Route exact path="/" component={PropertySearch} />
      <Route exact path="/cities/:city" component={SearchResultsPage} />
      <Route exact path="/cities/:city/:id" component={PropertyListingPage} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/my_location" component={MyLocationComponent} />
    </Router>
  );
};

export default Routes;
