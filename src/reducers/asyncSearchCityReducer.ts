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

const initialState: {cities: Array<searchCityInterface>, loading: boolean} = {
  cities: [],
  loading: false
};

export const asyncSearchCityReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SEARCH_CITY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SEARCH_CITY_SUCCESS:
      return {
        cities: action.payload,
        loading: false
      };
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
