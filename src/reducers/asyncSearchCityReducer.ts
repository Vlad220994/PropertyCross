import { 
  SEARCH_CITY_FAIL, 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS 
} from '../constants/constantsForCity';
import { searchCityInterface } from '../interfaces/searchCityInterface';

interface Action {
  type: string,
  payload: Array<searchCityInterface>,
  error: string
}

const initialState: {cities: Array<searchCityInterface>} = {
  cities: []
};

export const asyncSearchCityReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SEARCH_CITY_SUCCESS:
      return {
        cities: action.payload
      };
    case SEARCH_CITY_REQUEST:
      return state;
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state
  }
};
