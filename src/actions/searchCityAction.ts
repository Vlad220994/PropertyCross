import { SEARCH_CITY } from '../constants/constantsForCity';

interface searchCityInterface {
  id: number;
  centerLat: number; 
  centerLong: number;
  longTitle: string;
  placeName: string;
  title: string;
}

export const searchCityAction = (value: Array<searchCityInterface>) => (
  {
    type: SEARCH_CITY,
    value
  }
);
