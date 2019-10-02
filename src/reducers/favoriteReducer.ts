import { 
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_SUCCESS,
  FAVORITE_PROPERTIES
} from "../constants/favoritesConstants";

const initialState = {
  data: JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || []
};

export const favoriteReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
};
