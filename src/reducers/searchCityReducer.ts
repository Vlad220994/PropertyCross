import { SEARCH_CITY } from '../constants/constantsForCity';

const initialState: {cities: Array<Object>} = {
  cities: []
};

interface Action {
  type: string,
  value: Array<Object>
}

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
