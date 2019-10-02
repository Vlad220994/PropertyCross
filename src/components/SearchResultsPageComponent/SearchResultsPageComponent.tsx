import * as React from "react";
import { Link } from "react-router-dom";

import NumberOfMatches from "../NumberOfMatches/NumberOfMatches";
import Results from "../../containers/Results/Results";

export const SearchResultsPageComponent = ({ property, searchProperty }) => {
  return (
    <main className="main">
      <div className="container">
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Home
          </button>
        </Link>
        <h2 className="container__heading">{property.location.longTitle}</h2>
        <NumberOfMatches results={property.properties.length} />
      </div>
      <Results property={property} searchProperty={searchProperty} />
    </main>
  )
}