import { all } from "redux-saga/effects";
import watchFetchEmployee from "./fetchEmployee";

export default function* watch() {
    yield all([watchFetchEmployee()]);
}
