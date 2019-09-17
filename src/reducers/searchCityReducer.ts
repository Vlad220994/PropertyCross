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

export const fetchStatuses = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  ERROR: -1
};

const initialState: {cities: Array<searchCityInterface>, historyCities: Array<searchCityInterface>, fetchStatuses: number, loading: boolean} = {
  cities: [],
  loading: false,
  fetchStatuses: fetchStatuses.IDLE,
  historyCities: JSON.parse(localStorage.getItem("recentSearches")) || []
};

export const searchCityReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SEARCH_CITY_REQUEST:
      return {
        ...state,
        loading: true,
        fetchStatuses: fetchStatuses.REQUEST
      };
    case SEARCH_CITY_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
        fetchStatuses: fetchStatuses.SUCCESS
      };
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        fetchStatuses: fetchStatuses.ERROR
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
