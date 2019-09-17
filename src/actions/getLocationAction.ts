import { 
  SEARCH_CITY,
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  ADD_HISTORY
} from '../constants/cityConstants';

export const searchCityStarted = () => ({
  type: SEARCH_CITY_REQUEST
});

const recentSearches = "recentSearches";

export const searchCitySuccess = (cities: string[]) => {
  
  const getData = JSON.parse(localStorage.getItem(recentSearches)) || [];
  const newData = [...getData, ...cities];
  
  localStorage.setItem(recentSearches, JSON.stringify(newData));

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
  const getData = JSON.parse(localStorage.getItem(recentSearches)) || [];
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
