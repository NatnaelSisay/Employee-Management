// We need to import all reducers
// createStore from 'redux'
// call it on the main index.js file
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import saga from "../saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(saga);

export default store;
