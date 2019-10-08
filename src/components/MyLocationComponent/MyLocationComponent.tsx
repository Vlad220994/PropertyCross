import * as React from "react";
import { Fragment, useState } from 'react';

import { Header } from '../../components/Header/Header';
import { Error } from '../../components/Error/Error';
import { Spinner } from '../../components/Spinner/Spinner';
import { usePosition } from '../../hooks/usePosition/usePosition';
import { SearchByCoordinates } from "../../components/SearchByCoordinates/SearchByCoordinates";
import { FETCH_STATUSES } from "../../constants/fetchStatuses";

type location = {
  latitude: number,
  longitude: number,
  timestamp: number,
  accuracy: string, 
  error: string
};

export const MyLocationComponent = (props) => {
  const { watchLocation, settings, city, fetchStatus, searchCityByCoordinate} = props;

  const { latitude, longitude, timestamp, accuracy, error }: location = usePosition(watchLocation, settings);

  const [centerLatValue, setCenterLatValue] = useState("");
  const [centerLongValue, setCenterLongValue] = useState("");

  const onChangeCenterLat = ({ target }) => setCenterLatValue(target.value);
  const onChangeCenterLong = ({ target }) => setCenterLongValue(target.value);

  const onSearchByCoords = () => {
    searchCityByCoordinate(centerLatValue, centerLongValue);
  };

  const results = !latitude && !error ? 
    <Spinner /> : 
    <div>
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
      <p>timestamp: {timestamp}</p>
      <p>accuracy: {accuracy && `${accuracy}m`}</p>
      <p>error: {error}</p>
    </div>;

  const getResult = () => {
    switch (fetchStatus) {
      case FETCH_STATUSES.REQUEST:
        return <Spinner />;
      case FETCH_STATUSES.SUCCESS:
        return <SearchByCoordinates city={city} />;
      case FETCH_STATUSES.ERROR:
        return <Error />;
      default:
        return <div>Please enter the coordinates</div>;
    }
  }

  return(
    <Fragment>
      <Header />
      <div className="my-location">
        <h1 className="heading-block">My location</h1>
        { results }
        <div className="form-block">
          <input type="text" className="form-control" placeholder="centerLat" onChange={onChangeCenterLat} />
          <input type="text" className="form-control" placeholder="centerLong" onChange={onChangeCenterLong} />
          <button type="button" className="btn btn-primary" onClick={onSearchByCoords}>Go</button>
        </div>
        {
          getResult()
        }
      </div>
    </Fragment>
  );
};