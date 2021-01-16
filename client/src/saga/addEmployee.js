import { call, put, takeLatest } from "redux-saga/effects";
import { addEmployeeRequest, addEmployeeSuccess } from "../store/actions";
import { createEmployee } from "../api";

export function* addEmployee(result) {
    const { payload } = result;
    console.log("User Data => ", payload);
    yield put(addEmployeeRequest());
    // Call the Api to server.

    const dataFromServer = yield call(createEmployee, payload);
    yield console.log("Data from server => ", dataFromServer);
    yield put(addEmployeeSuccess());
}

export default function* watchAddEmployee() {
    yield takeLatest("ADD_EMPLOYEE_REQUEST_SAGA", addEmployee);
}
