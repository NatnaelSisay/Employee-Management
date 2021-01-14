import { put, takeLatest } from "redux-saga/effects";
import { addEmployeeRequest, addEmployeeSuccess } from "../store/actions";

import { fetchedData } from "./fetchEmployee";
export function* addEmployee(result) {
    const { payload } = result;
    yield put(addEmployeeRequest());
    // Call the Api to server.
    let data = {
        id: Math.random() * 100,
        ...payload,
    };
    yield fetchedData.push(data);
    // yield console.log("Feth Data Updated => ", fetchedData);
    yield put(addEmployeeSuccess());
}

export default function* watchAddEmployee() {
    yield takeLatest("ADD_EMPLOYEE_REQUEST_SAGA", addEmployee);
}
