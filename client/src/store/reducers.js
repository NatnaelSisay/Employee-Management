import { combineReducers } from "redux";

import fetchEmployee from "./fetchEmployee/reducer";
import addEmployee from "./addEmployee/reducer";

const reducers = combineReducers({
    fetchEmployee,
    addEmployee,
});

export default reducers;
