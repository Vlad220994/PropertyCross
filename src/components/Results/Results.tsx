import * as React from 'react';

import Element from '../Element/Element';
import './Results.scss';

const Results = () => {
  return(
    <ul className="list">
      <li className="list__element">
        <Element />
      </li>
      <li className="list__element">
        <Element />
      </li>
    </ul>
  );
}

export default Results;
