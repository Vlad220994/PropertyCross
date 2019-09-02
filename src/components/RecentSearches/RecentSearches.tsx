import * as React from 'react';

import './RecentSearches.scss';

const RecentSearches = () => {
  return(
    <section className="RecentSearches">
      <h2>RecentSearches</h2>
      <div>
        <ul>
          <li><span className="search">Search</span> <span className="number">#1</span> <span>(12)</span></li>
        </ul>
      </div>
    </section>
  );
}

export default RecentSearches;
