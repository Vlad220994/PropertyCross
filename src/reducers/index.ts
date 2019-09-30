import { combineReducers } from "redux";

import { searchCityReducer } from "./searchCityReducer";
import { getPropertyReducer } from "./getPropertyReducer";
import { getFavoritesReducer } from "./getFavoritesReducer";

export default combineReducers({ searchCityReducer, getPropertyReducer, getFavoritesReducer });
