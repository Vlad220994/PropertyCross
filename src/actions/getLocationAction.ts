import { searchCityAction } from './searchCityAction';
import { getResource } from '../services/apiService';

export const getLocation = (titleCity: string) => {
  return async dispatch => {
    const city = await getResource(`/locations/searchByName?placeName=${titleCity}`);
    dispatch(searchCityAction(city));
  }
}
