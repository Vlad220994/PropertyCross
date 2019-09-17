import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import RecentSearches from '../RecentSearches/RecentSearches';
import ListedLocation from '../ListedLocation/ListedLocation';
import { searchCity } from '../../actions/getLocationAction';
import './main.scss';


interface PropsType {
  searchCity: (city: string) => void;
};

const Main = (props: PropsType) => {
  const [value, setValue] = useState('');
  const [viewComponent, setViewComponent] = useState(false);

  const onChange = ({target}) => setValue(target.value);

  const onClick = (value: string, viewComponent: boolean) => () => {
    props.searchCity(value);
    setViewComponent(viewComponent = true);
  };

  const setComponent = viewComponent ? <ListedLocation /> : <RecentSearches />
  
  return(
    <main className="main-block">
      <p className="main-block__block1">
        Use the form below to search for houses to buy. You can search by place-name, 
        postcode, or click 'My location', to search in your current location!
      </p>
      <div className="main-block__block2">
        <input type="text" className="form-control" placeholder="Location" onChange={onChange} />
        <div className="main-block__block3">
          <input type="button" value="Go" className="btn btn-primary" onClick={onClick(value, viewComponent)} />
          <input type="button" value="My location" className="btn btn-primary" />
        </div>
      </div>
      {setComponent}
    </main>
  );
}

const mapDispatchToProps = {
  searchCity,
}

export default connect(null, mapDispatchToProps)(Main);
