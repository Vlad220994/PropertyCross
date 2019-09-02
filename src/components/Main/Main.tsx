import * as React from 'react';

import './Main.scss';

const Main = () => {
  return(
    <main>
      <p>
        Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!
      </p>
      <div>
        <input type="text" className="form-control" placeholder="Location" />
        <div>
          <input type="button" value="Go" className="btn btn-primary" />
          <input type="button" value="My location" className="btn btn-primary" />
        </div>
      </div>
    </main>
  );
}

export default Main;
