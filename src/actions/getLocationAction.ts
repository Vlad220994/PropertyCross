import { 
  SEARCH_CITY_FAIL, 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS 
} from '../constants/constantsForCity';

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

export const searchCityRequest = (titleCity) => {
  const request = {
    url: `http://localhost:3000/locations/searchByName?placeName=${titleCity}`,
  };
  
  return {
    type: "REQUEST",
    payload: request
  }
}
