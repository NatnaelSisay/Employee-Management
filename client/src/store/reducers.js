import { combineReducers } from "redux";

import fetchEmployee from "./fetchEmployee/reducer";
import addEmployee from "./addEmployee/reducer";
import updateEmployee from "./updateEmployee/reducer";
import deleteReducer from "./deleteEmployee/reducer";

const reducers = combineReducers({
    fetchEmployee,
    addEmployee,
    updateEmployee,
    deleteReducer,
});

export default reducers;
