import * as React from "react";
import { connect } from "react-redux";

import { MyLocationComponent } from '../../components/MyLocationComponent/MyLocationComponent';
import { searchCityByCoordinates } from '../../actions/getLocationAction';
import './myLocation.scss';

(props) => {
  const { city, fetchStatus, searchCityByCoordinate } = props;

  return <MyLocationComponent city={city} fetchStatus={fetchStatus} searchCityByCoordinate={searchCityByCoordinate} />
};

const mapStateToProps = state => ({
  city: state.searchCityReducer.citiesCoordinate,
  fetchStatus: state.searchCityReducer.fetchStatus
});

const mapDispatchToProps = {
  searchCityByCoordinate: searchCityByCoordinates
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLocationComponent)
