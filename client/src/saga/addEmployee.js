import { takeLatest } from "redux-saga/effects";
export function* addEmployee(payload) {
    yield console.log("Called");
}

export default function* watchAddEmployee() {
    yield takeLatest("ADD_EMPLOYEE_REQUEST_SAGA", addEmployee);
}
