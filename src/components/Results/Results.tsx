import * as React from "react";

import Element from "../Element/Element";
import "./results.scss";

const Results = () => {
  return (
    <ul className="results">
      <li className="results__element">
        <Element />
      </li>
      <li className="results__element">
        <Element />
      </li>
    </ul>
  );
};

export default Results;
