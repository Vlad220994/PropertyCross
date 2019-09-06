import { 
  SEARCH_CITY_FAIL, 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS 
} from '../constants/constantsForCity';

export const getLocation = (titleCity: string) => {
  return dispatch => {
    fetch(`http://localhost:3000/locations/searchByName?placeName=${titleCity}`)
      .then(dispatch(searchCityStarted()))
      .then(res => res.json())
      .then(cities => dispatch(searchCitySuccess(cities)))
      .catch( err => dispatch(searchCityFail(err)))
  } 
};

export const searchCityStarted = () => ({
  type: SEARCH_CITY_REQUEST
})

export const searchCitySuccess = (cities: Array<string>) => ({
  type: SEARCH_CITY_SUCCESS,
  payload: cities
}); 

export const searchCityFail = (error: string) => ({
  type: SEARCH_CITY_FAIL,
  payload: error
}); 
