import { combineReducers } from "redux";

import { searchCityReducer } from "./searchCityReducer";
import { getPropertyReducer } from "./getPropertyReducer";
import { favoriteReducer } from "./favoriteReducer";

export default combineReducers({ searchCityReducer, getPropertyReducer, favoriteReducer });
