import * as React from 'react';

import './ListedLocation.scss';

const ListedLocation = () => {
  return(
    <section className="ListedLocation">
      <h2>Please select a location below</h2>
      <div>
        <ul>
          <li><span className="location">Location</span> <span className="number">#1</span></li>
        </ul>
      </div>
    </section>
  );
}

export default ListedLocation;
