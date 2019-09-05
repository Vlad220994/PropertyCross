import { SEARCH_CITY } from '../constants/constants';

const initialState = {
  cities: []
};

export const searchCityReducer = (state = initialState, action) => {
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
