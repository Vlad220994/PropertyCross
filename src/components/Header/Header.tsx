import * as React from 'react';
import './Header.scss';

const Header = () => {
  return(
    <header>
      <h1>Property Cross</h1>
      <input type="button" value="Faves" className="btn btn-primary" />
    </header>
  );
}

export default Header;