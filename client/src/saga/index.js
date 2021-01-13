import { all } from "redux-saga/effects";
import watchFetchEmployee from "./fetchEmployee";
import watchAddEmployee from "./addEmployee";

export default function* watch() {
    yield all([watchFetchEmployee(), watchAddEmployee()]);
}
