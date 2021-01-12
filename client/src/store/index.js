// We need to import all reducers
// createStore from 'redux'
// call it on the main index.js file
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
