import * as React from 'react';
import { connect } from 'react-redux';

import Error from '../Error/Error';
import './recentSearches.scss';

const RecentSearches = ({ error, cities }) => {

  const city = cities.map((item: any, i: number) => {
    
    const { title, id } = item;
    
    return(
      <tr className="recent-searches__list" key={id}>
        <td>
          <span className="recent-searches__search">Search </span>
          <span className="recent-searches__number">#{i+1} </span>
        </td>
        <td>
          <span className="recent-searches__title">{title}</span>
        </td>
      </tr>
    )});
    
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">RecentSearches</h2>
      <div className="recent-searches__block1">
        <table className="recent-searches__block2">
          <tbody>
            { error ? <Error /> : city }
          </tbody>
        </table>
      </div>
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  cities: state.asyncSearchCityReducer.cities,
  error: state.asyncSearchCityReducer.error
});

export default connect(mapStateToProps)(RecentSearches);
