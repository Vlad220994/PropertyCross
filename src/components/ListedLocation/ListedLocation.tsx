import * as React from 'react';

import './listedLocation.scss';

const ListedLocation = () => {
  return(
    <section className="listed-location">
      <h2 className="listed-location__heading">Please select a location below</h2>
      <div className="listed-location__block1">
        <ul className="listed-location__block2">
          <li><span className="listed-location__block2-location">Location</span> <span className="listed-location__block2-number">#1</span></li>
        </ul>
      </div>
    </section>
  );
}

export default ListedLocation;
