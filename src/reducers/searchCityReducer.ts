import { SEARCH_CITY } from '../constants/constantsForCity';
import { searchCityInterface } from '../interfaces/searchCityInterface';

interface Action {
  type: string,
  value: Array<searchCityInterface>
}

const initialState: {cities: Array<searchCityInterface>} = {
  cities: []
};

export const searchCityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        cities: action.value
      }
    default:
      return state;
  }
}
