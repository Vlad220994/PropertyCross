import * as React from 'react';
import { Link } from 'react-router-dom';

export const MainComponent = ({onChange, value, onClick, children}) => {

  return(
    <main className="main-block">
      <p className="main-block__block1">
        Use the form below to search for houses to buy. You can search by
        place-name, postcode, or click 'My location', to search in your current
        location!
      </p>
      <div className="main-block__block2">
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          onChange={onChange}
          value={value}
        />
        <div className="main-block__block3">
          <input
            type="button"
            value="Go"
            className="btn btn-primary"
            onClick={onClick(value)}
          />
          <Link to="/my_location">
            <input
              type="button"
              value="My location"
              className="btn btn-primary"
            />
          </Link>
        </div>
      </div>
      {children()}
    </main>
  );
}
