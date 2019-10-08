import * as React from 'react';

import { Link } from 'react-router-dom';

export const SearchByCoordinates = ({ city }) => {

  const location = city.map((item, i) => {
    const { longTitle, placeName } = item;
    
    return (
      <Link to={`/cities/${placeName}`} key={longTitle + i}>
        <p className="longtitle-block">{longTitle}</p>
      </Link>
    );
  });

  return(
    <div className="location-block">
      {location}
    </div>
  );
}; 