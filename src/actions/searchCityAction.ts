import { SEARCH_CITY } from '../constants/constants';

export const searchCityAction = (value: Array<Object>) => (
  {
    type: SEARCH_CITY,
    value
  }
);
