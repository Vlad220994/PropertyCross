import { 
  ADD_TO_FAVORITES_REQUEST, 
  ADD_TO_FAVORITES_SUCCESS, 
  ADD_TO_FAVORITES_ERROR,
  FAVORITE_PROPERTIES
} from "../constants/favoritesConstants";

const initialState = {
  getFavorites: [],
  favoritesProperty: JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [],
};

export const getFavoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_FAVORITES_REQUEST:
      return {
        ...state
      };
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        getFavorites: action.payload
      };
    case ADD_TO_FAVORITES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
