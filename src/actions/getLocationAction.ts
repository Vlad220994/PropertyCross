import { 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL, 
} from '../constants/cityConstants';

export const searchCityStarted = () => ({
  type: SEARCH_CITY_REQUEST
})

export const searchCitySuccess = (cities: string[]) => ({
  type: SEARCH_CITY_SUCCESS,
  payload: cities
}); 

export const searchCityFail = (error: string) => ({
  type: SEARCH_CITY_FAIL,
  payload: error
}); 

export const searchCity = (titleCity: string) => {
  const request = {
    url: `http://localhost:3000/locations/searchByName?placeName=${titleCity}`,
    onStart: searchCityStarted,
    onSuccess: searchCitySuccess,
    onFail: searchCityFail
  };
  
  return {
    request: true,
    payload: request
  }
}
