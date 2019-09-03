import * as React from 'react';
import { Router, Route } from 'react-router-dom';

import PropertySearch from '../PropertySearch/PropertySearch';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';

const Routes = ({history}) => {
  return(
    <Router history={history}>
      <Route exact path="/" component={PropertySearch}  />
      <Route exact path="/search-results-page" component={SearchResultsPage} />
    </Router>
  );
}

export default Routes;
