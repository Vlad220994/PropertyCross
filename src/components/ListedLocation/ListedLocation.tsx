import * as React from 'react';
import { connect } from 'react-redux';

import './listedLocation.scss';

const ListedLocation = ({ cities }) => {
  
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
    )
  });

  return(
    <section className="listed-location">
      <h2 className="listed-location__heading">Please select a location below</h2>
      <div className="listed-location__block1">
        <table className="listed-location__block2">
          <tbody>
            { city }
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ListedLocation;
