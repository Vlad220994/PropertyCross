import * as React from 'react';
import { connect } from 'react-redux';

import './recentSearches.scss';

const RecentSearches = ({ historyCities }) => {
  const locationReverse = historyCities.reverse().filter((item, i) => i < 10 );

  const location = locationReverse.map((item, i) => {
    return(
      <li key={item.id + i}>
        <span>{item.title}</span>
        <span>{i+1}</span>
      </li>
    );
  });

  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">Recent Searches</h2>
      <div className="recent-searches__block1">
        <ul className="recent-searches__block2">
          {location}
        </ul>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  historyCities: state.searchCityReducer.historyCities
});

export default connect(mapStateToProps)(RecentSearches);
