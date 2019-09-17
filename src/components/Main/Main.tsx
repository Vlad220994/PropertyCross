import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import {fetchStatuses, searchCityReducer} from '../../reducers/searchCityReducer';
import RecentSearches from '../RecentSearches/RecentSearches';
import ListedLocation from '../ListedLocation/ListedLocation';
import Error from '../Error/Error';
import { searchCity } from '../../actions/getLocationAction';
import './main.scss';
import { Spinner } from '../Spinner/Spinner';


interface PropsType {
  searchCity: (city: string) => void;
  fetchStatus: number
};

const Main = (props: PropsType) => {
  const [value, setValue] = useState('');
  
  const component = () => {
    switch(props.fetchStatus) {
      case fetchStatuses.REQUEST:
        return (
          <Spinner />
        );
      case fetchStatuses.SUCCESS:
        return(
          <ListedLocation />
        );
      case fetchStatuses.ERROR:
        return (
          <Error />
        );
      default:
        return(
          <RecentSearches />
        );
    }
  };

  const onChange = ({target}) => setValue(target.value);

  const onClick = (value: string) => () => {
    props.searchCity(value);
  };

  return(
    <main className="main-block">
      <p className="main-block__block1">
        Use the form below to search for houses to buy. You can search by place-name, 
        postcode, or click 'My location', to search in your current location!
      </p>
      <div className="main-block__block2">
        <input type="text" className="form-control" placeholder="Location" onChange={onChange} />
        <div className="main-block__block3">
          <input type="button" value="Go" className="btn btn-primary" onClick={onClick(value)} />
          <input type="button" value="My location" className="btn btn-primary" />
        </div>
      </div>
      {component()}
    </main>
  );
}

const mapDispatchToProps = {
  searchCity,
}

const mapStateToProps = state => ({
  fetchStatus: state.searchCityReducer.fetchStatuses
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
