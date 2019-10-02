import * as React from 'react';

export const RecentSearchesComponent = (props) => {
  const { location } = props;
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">Recent Searches</h2>
      <div className="recent-searches__block1">
        <ul className="location-list">{location}</ul>
      </div>
    </section>
  );
}