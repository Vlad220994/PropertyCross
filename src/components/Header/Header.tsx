import * as React from "react";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">Property Cross</h1>
      <input type="button" value="Faves" className="btn btn-primary" />
    </header>
  );
};

export default Header;
