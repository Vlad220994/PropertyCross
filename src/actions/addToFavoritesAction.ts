import { 
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_SUCCESS,
  FAVORITE_PROPERTIES
} from "../constants/favoritesConstants";

export const addToFavoritesSuccess = (location, id, title, imgUrl, price, ) => {
  const getData = JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [];

  const obj = [
    {
      value: "Favorite #" + (getData.length + 1),
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
    payload: getResults
  };
};

export const removeFromFavoritesSuccess = (id) => {
  const getData = JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [];

  const filterArray = getData.filter((item) => item.id !== id);

  localStorage.setItem(FAVORITE_PROPERTIES, JSON.stringify(filterArray));
   
  return {
    type: REMOVE_FROM_FAVORITES_SUCCESS,
    payload: filterArray
  };
};
