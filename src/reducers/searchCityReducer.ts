import { 
  SEARCH_CITY_FAIL, 
  SEARCH_CITY_REQUEST, 
  SEARCH_CITY_SUCCESS,
  ADD_HISTORY 
} from '../constants/cityConstants';
import { searchCityInterface } from '../interfaces/searchCityInterface';
import { RECENT_SEARCHES } from '../constants/recentSearches';
import { FETCH_STATUSES } from '../constants/fetchStatuses';

interface Action {
  type: string,
  payload: Array<searchCityInterface>,
  error: string
}

const initialState: {
  cities: Array<searchCityInterface>, 
  historyCities: Array<searchCityInterface>, 
  fetchStatus: number
} = {
  cities: [],
  fetchStatus: FETCH_STATUSES.IDLE,
  historyCities: JSON.parse(localStorage.getItem(RECENT_SEARCHES)) || []
};

export const searchCityReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case SEARCH_CITY_REQUEST:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.REQUEST
      };
    case SEARCH_CITY_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        fetchStatus: FETCH_STATUSES.SUCCESS
      };
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchStatus: FETCH_STATUSES.ERROR
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
