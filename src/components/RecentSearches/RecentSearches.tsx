import * as React from 'react';
import { connect } from 'react-redux';

import { Spinner } from '../Spinner/Spinner';
import Error from '../Error/Error';
import './recentSearches.scss';

const RecentSearches = ({ cities, loading, error }) => {

  const city = cities.map((item, i: number) => {
    
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
    const result = error ? <Error /> : city;
  return(
    <section className="recent-searches">
      <h2 className="recent-searches__heading">Recent Searches</h2>
      <div className="recent-searches__block1">
        <table className="recent-searches__block2">
          <tbody>
            { loading ? <Spinner /> : result }
          </tbody>
        </table>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  cities: state.searchCityReducer.cities,
  error: state.searchCityReducer.error,
  loading: state.searchCityReducer.loading
});

export default connect(mapStateToProps)(RecentSearches);
