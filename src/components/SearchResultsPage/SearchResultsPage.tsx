import * as React from 'react';

import NumberOfMatches from '../NumberOfMatches/NumberOfMatches';
import Results from '../Results/Results';
import './searchResultsPage.scss';

const SearchResultsPage = () => {
  return(
    <main className="main">
      <NumberOfMatches />
      <Results />
    </main>
  );
}

export default SearchResultsPage;
