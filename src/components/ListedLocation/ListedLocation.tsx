import * as React from 'react';
import { connect } from 'react-redux';

import { Spinner } from '../Spinner/Spinner';
import Error from '../Error/Error';
import './listedLocation.scss';
const arr = [];
const ListedLocation = ({ cities, loading, error }) => {
  
  const city = cities.map((item, i) => {
    
    const { title, id } = item;

    return(
      <tr className="listed-location__list" key={id}>
        <td>
          <span className="listed-location__search">Search </span>
          <span className="listed-location__number">#{i+1} </span>
        </td>
        <td>
          <span className="listed-location__title">{title}</span>
        </td>
      </tr>
    )});

    const result = error ? <Error /> : city;

  return(
    <section className="listed-location">
      <h2 className="listed-location__heading">Please select a location below</h2>
      <div className="listed-location__block1">
        <table className="listed-location__block2">
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

export default connect(mapStateToProps)(ListedLocation);
