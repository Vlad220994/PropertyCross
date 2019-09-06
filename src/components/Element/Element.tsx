import * as React from 'react';

import './element.scss';

const Element = () => {
  return(
    <div className="container">
      <img src="https://www.w3schools.com/w3css/img_avatar3.png" className="container__image" alt="1" />
      <div className="container-info">
        <h2 className="container-info__heading">$20,995</h2>
        <p className="container-info__paragraph">Somewhere, nowhere</p>
      </div>
    </div>
  );
}

export default Element;