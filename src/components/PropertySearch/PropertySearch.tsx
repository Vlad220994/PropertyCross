import * as React from 'react';
import { Fragment } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import RecentSearches from '../RecentSearches/RecentSearches';
import Error from '../Error/Error';
import ListedLocation from '../ListedLocation/ListedLocation';
import Footer from '../Footer/Footer';

const PropertySearch = () => {
  return(
    <Fragment>
      <Header />
      <Main />
      <ListedLocation />
      <Footer />
    </Fragment>
  );
}

export default PropertySearch;
