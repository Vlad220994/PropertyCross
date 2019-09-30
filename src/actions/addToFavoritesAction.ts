import { 
  ADD_TO_FAVORITES_REQUEST, 
  ADD_TO_FAVORITES_SUCCESS, 
  ADD_TO_FAVORITES_ERROR,
  FAVORITE_PROPERTIES
} from "../constants/favoritesConstants";

export const addToFavoritesRequest = () => ({
  type: ADD_TO_FAVORITES_REQUEST
});

export const addToFavoritesSuccess = (location, id, title, imgUrl, price, ) => {
  const getData = JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [];

  const obj = [
    {
      value: "Faves #" + (getData.length + 1),
      id,
      location,
      title,
      imgUrl,
      price
    }
  ];

  const getResults = [...obj, ...getData];

  localStorage.setItem(FAVORITE_PROPERTIES, JSON.stringify(getResults));

  return {
    type: ADD_TO_FAVORITES_SUCCESS,
    payload: id
  };
};

export const addToFavoritesError = error => ({
  type: ADD_TO_FAVORITES_ERROR,
  payload: error
});
