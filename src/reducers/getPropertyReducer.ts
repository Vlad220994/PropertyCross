import {
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_ERROR
} from "../constants/getProperty";
import { FETCH_STATUSES } from "../constants/fetchStatuses";

const initialState: {
  properties;
  fetchStatus: number;
} = {
  properties: {
    properties: [],
    location: {
      longTitle: ""
    }
  },
  fetchStatus: FETCH_STATUSES.IDLE
};

export const getPropertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTY_REQUEST:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.REQUEST
      };
    case GET_PROPERTY_SUCCESS:
      return {
        ...state,
        properties: action.payload,
        fetchStatus: FETCH_STATUSES.SUCCESS
      };
    case GET_PROPERTY_ERROR:
      return {
        ...state,
        error: action.payload,
        fetchStatus: FETCH_STATUSES.ERROR
      };
    default:
      return state;
  }
};
