import * as React from 'react';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PropertySearch from '../PropertySearch/PropertySearch';

import PageInterface from '../../PageInterface';

class App extends Component<PageInterface, {}> {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Route path="/" component={PropertySearch} exact />
      </Router>
    );
  }
}

export default App;
