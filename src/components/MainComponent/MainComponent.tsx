import * as React from 'react';

export const MainComponent = ({onChange, value, onClick, component}) => {

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
          <input
            type="button"
            value="My location"
            className="btn btn-primary"
          />
        </div>
      </div>
      {component()}
    </main>
  );
}
