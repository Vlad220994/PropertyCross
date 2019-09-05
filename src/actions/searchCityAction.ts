import { SEARCH_CITY } from '../constants/constantsForCity';

export const searchCityAction = (value: Array<Object>) => (
  {
    type: SEARCH_CITY,
    value
  }
);
