import { put, takeLatest } from "redux-saga/effects";
import { updateEmployeeRequest, updateEmployeeSuccess } from "../store/actions";

import { fetchedData } from "./fetchEmployee";

export function* updateEmployee(payload) {
    console.log(payload);
    const id = payload.params.id;

    yield put(updateEmployeeRequest());
    const result = fetchedData.filter((item) => item.id === parseInt(id))[0];
    yield put(updateEmployeeSuccess(result));
}

export function* editEmployee(payload) {
    yield put(updateEmployeeRequest());
    console.log("Goona Edit Employeee on the database");
}

export default function* watchUpdateEmployee() {
    yield takeLatest("UPDATE_EMPLOYEE_REQUEST_SAGA", updateEmployee);
    yield takeLatest("UPDATE_EMPLOYEE_SAGA", editEmployee);
}
