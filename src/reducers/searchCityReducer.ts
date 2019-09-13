import { 
  SEARCH_CITY_FAIL, 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS,
  ADD_HISTORY 
} from '../constants/cityConstants';
import { searchCityInterface } from '../interfaces/searchCityInterface';

interface Action {
  type: string,
  payload: Array<searchCityInterface>,
  error: string
}

const initialState: {cities: Array<searchCityInterface>, historyCities: Array<searchCityInterface>, loading: boolean} = {
  cities: [],
  loading: false,
  historyCities: JSON.parse(localStorage.getItem("localData")) || []
};

export const searchCityReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SEARCH_CITY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SEARCH_CITY_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ADD_HISTORY:
      return {
        ...state,
        historyCities: action.payload,
      }
    default:
      return state;
  }
};
