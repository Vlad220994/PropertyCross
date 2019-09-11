import * as React from 'react';

import './recentSearches.scss';

const RecentSearches = () => {
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">Recent Searches</h2>
      <div className="recent-searches__block1">
        <ul className="recent-searches__block2">
          <li><span className="recent-searches__block2-location">Location</span> <span className="recent-searches__block2-number">#1</span></li>
        </ul>
      </div>
    </section>
  );
}

export default RecentSearches;
