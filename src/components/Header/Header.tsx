import * as React from "react";
import { Link } from 'react-router-dom';

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">Property Cross</h1>
      <Link to="/favorites">
        <button type="button" className="btn btn-primary">Faves</button>
      </Link>
    </header>
  );
};

export default Header;
