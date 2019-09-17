import { 
  SEARCH_CITY,
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  ADD_HISTORY
} from '../constants/cityConstants';
import { RECENT_SEARCHES } from '../constants/recentSearches';

export const searchCityStarted = () => ({
  type: SEARCH_CITY_REQUEST
});

export const searchCitySuccess = (cities: string[]) => {
  
  const getData = JSON.parse(localStorage.getItem(RECENT_SEARCHES)) || [];
  const newData = [...getData, ...cities];
  
  localStorage.setItem(RECENT_SEARCHES, JSON.stringify(newData));

  return {
    type: SEARCH_CITY_SUCCESS,
    payload: cities
  }
}; 

export const searchCityFail = (error: string) => ({
  type: SEARCH_CITY_FAIL,
  payload: error
}); 

export const addHistory = (cities: string[]) => {
  const getData = JSON.parse(localStorage.getItem(RECENT_SEARCHES)) || [];
  return {
    type: ADD_HISTORY,
    payload: getData
  }
};

export const searchCity = (titleCity: string) => {
  const request = {
    url: `/locations/searchByName?placeName=${titleCity}`,
    onStart: searchCityStarted,
    onSuccess: searchCitySuccess,
    onFail: searchCityFail,
    addHistory
  };
  
  return {
    type: SEARCH_CITY,
    request
  }
}
