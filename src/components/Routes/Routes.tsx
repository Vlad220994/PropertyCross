import * as React from 'react';
import { Router, Route } from 'react-router-dom';

import PropertySearch from '../PropertySearch/PropertySearch';

const Routes = ({history}) => {
  return(
    <Router history={history}>
      <Route path="/" component={PropertySearch} exact />
    </Router>
  );
}

export default Routes;
