import { combineReducers } from "redux";

import fetchEmployee from "./fetchEmployee/reducer";

const reducers = combineReducers({
    fetchEmployee,
});

export default reducers;
