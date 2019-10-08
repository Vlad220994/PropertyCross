import {
  SEARCH_CITY,
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  SEARCH_CITY_BY_COORDINATES_FAIL,
  SEARCH_CITY_BY_COORDINATES_SUCCESS
} from "../constants/cityConstants";
import { RESULT_OF_SEARCH } from "../constants/resultOfSearch";

export const searchCityStarted = () => ({
  type: SEARCH_CITY_REQUEST
});

export const searchCitySuccess = (cities: string[], titleCity) => {
  const getData = JSON.parse(localStorage.getItem(RESULT_OF_SEARCH)) || [];

  const obj = [
    {
      value: "Search #" + (getData.length + 1),
      titleCity,
      count: cities.length
    }
  ];

  const getResults = [...obj, ...getData];

  localStorage.setItem(RESULT_OF_SEARCH, JSON.stringify(getResults));

  return {
    type: SEARCH_CITY_SUCCESS,
    payload: cities
  };
};

export const searchCityByCoordinatesSuccess = (cities: string[]) => ({
  type: SEARCH_CITY_BY_COORDINATES_SUCCESS,
  payload: cities
});

export const searchCityFail = (error: string) => ({
  type: SEARCH_CITY_FAIL,
  payload: error
});

export const searchCityByCoordinatesFail = (error: string) => ({
  type: SEARCH_CITY_BY_COORDINATES_FAIL,
  payload: error
});

export const searchCity = (titleCity: string) => {
  const request = {
    url: `/locations/searchByName?placeName=${titleCity}`,
    onStart: searchCityStarted,
    onSuccess: searchCitySuccess,
    onFail: searchCityFail,
    params: {
      title: titleCity,
    }
  };

  return {
    type: SEARCH_CITY,
    request
  };
};

export const searchCityByCoordinates = (lat, long) => {
  const request = {
    url: `/locations/searchByCoordinates?lat=${lat}&long=${long}`,
    onStart: searchCityStarted,
    onSuccess: searchCityByCoordinatesSuccess,
    onFail: searchCityByCoordinatesFail,
    params: {
      lat,
      long
    }
  };

  return {
    type: SEARCH_CITY,
    request
  };
};
