import * as React from "react";

import "./numberOfMatches.scss";

const NumberOfMatches = ({ results }) => {
  return (
    <section className="numberOfMatches">
      <h2 className="numberOfMatches__heading">{results} results</h2>
    </section>
  );
};

export default NumberOfMatches;
