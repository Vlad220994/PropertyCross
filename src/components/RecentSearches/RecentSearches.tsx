import * as React from 'react';
import { connect } from 'react-redux';

import './recentSearches.scss';

const RecentSearches = ({ cities = [] }) => {
  
  const city = cities.map((item,i) => {
    
    const { title } = item;
    
    return(
      <tr className="recent-searches__list" key={i}>
        <td>
          <span className="recent-searches__search">Search </span>
          <span className="recent-searches__number">#{i+1} </span>
        </td>
        <td>
          <span className="recent-searches__title">{title}</span>
        </td>
      </tr>
    )}) ;
    
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">RecentSearches</h2>
      <div className="recent-searches__block1">
        <table className="recent-searches__block2">
          <tbody>
            {city}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.searchCityReducer.cities
  };
};

export default connect(mapStateToProps)(RecentSearches);
