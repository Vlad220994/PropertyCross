import {
  SEARCH_CITY_FAIL,
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS
} from "../constants/cityConstants";
import { searchCityInterface } from "../interfaces/searchCityInterface";
import { RESULT_OF_SEARCH } from "../constants/resultOfSearch";
import { FETCH_STATUSES } from "../constants/fetchStatuses";

interface Action {
  type: string;
  payload: Array<searchCityInterface>;
  error: string;
}

const initialState: {
  cities: Array<searchCityInterface>;
  historyCities: Array<searchCityInterface>;
  fetchStatus: number;
} = {
  cities: [],
  fetchStatus: FETCH_STATUSES.IDLE,
  historyCities: JSON.parse(localStorage.getItem(RESULT_OF_SEARCH)) || []
};

export const searchCityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
