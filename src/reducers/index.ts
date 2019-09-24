import { combineReducers } from "redux";

import { searchCityReducer } from "./searchCityReducer";
import { getPropertyReducer } from "./getPropertyReducer";

export default combineReducers({ searchCityReducer, getPropertyReducer });
