import { takeLatest } from "redux-saga/effects";

export function* updateEmployee(payload) {
    yield console.log("update employee");
}

export default function* watchUpdateEmployee() {
    yield takeLatest("UPDATE_EMPLOYEE_REQUEST_SAGA", updateEmployee);
}
