import { all } from "redux-saga/effects";
import watchFetchEmployee from "./fetchEmployee";
import watchAddEmployee from "./addEmployee";
import watchUpdateEmployee from "./updateEmployee";
import watchDeleteEmployee from "./deleteEmployee";

export default function* watch() {
    yield all([
        watchFetchEmployee(),
        watchAddEmployee(),
        watchUpdateEmployee(),
        watchDeleteEmployee(),
    ]);
}
