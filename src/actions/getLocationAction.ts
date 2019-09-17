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

export const searchCitySuccess = (cities: string[]) => {
  const recentSearches = JSON.parse(localStorage.getItem("localData")) || [];
  const newData = [...recentSearches, ...cities];
  
  localStorage.setItem("localData", JSON.stringify(newData));

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
  const recentSearches = JSON.parse(localStorage.getItem("localData")) || [];
  return {
    type: ADD_HISTORY,
    payload: recentSearches
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
