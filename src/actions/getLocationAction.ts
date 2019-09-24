import {
  SEARCH_CITY,
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  ADD_HISTORY
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

export const searchCityFail = (error: string) => ({
  type: SEARCH_CITY_FAIL,
  payload: error
});

export const addHistory = (cities: string[]) => {
  const getData = JSON.parse(localStorage.getItem(RESULT_OF_SEARCH)) || [];
  return {
    type: ADD_HISTORY,
    payload: getData
  };
};

export const searchCity = (titleCity: string) => {
  const request = {
    url: `/locations/searchByName?placeName=${titleCity}`,
    onStart: searchCityStarted,
    onSuccess: searchCitySuccess,
    onFail: searchCityFail,
    title: titleCity,
    addHistory
  };

  return {
    type: SEARCH_CITY,
    request
  };
};
