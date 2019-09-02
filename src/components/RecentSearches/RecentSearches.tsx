import * as React from 'react';

import './recentSearches.scss';

const RecentSearches = () => {
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">RecentSearches</h2>
      <div className="recent-searches__block1">
        <ul className="recent-searches__block2">
          <li className="recent-searches__list"><span className="recent-searches__search">Search</span> <span className="recent-searches__number">#1</span> <span>(12)</span></li>
        </ul>
      </div>
    </section>
  );
}

export default RecentSearches;
