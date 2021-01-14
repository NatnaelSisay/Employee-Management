import { put, takeLatest } from "redux-saga/effects";
import { fetchEmployeeReqest, fetchEmployeeSuccess } from "../store/actions";

import { FETCH_EMPLOYEE_REQUEST_SAGA } from "../store/types";

export let fetchedData = [
    {
        id: 1,
        employeeName: "Java",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 2,
        employeeName: "Alemlate",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 3,
        employeeName: "Jemal",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 4,
        employeeName: "Temesgen",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 5,
        employeeName: "Fifty",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },

    {
        id: 6,
        employeeName: "Tedi",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 7,
        employeeName: "Mere",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
];

// Worker
export function* fetchEmployee() {
    yield put(fetchEmployeeReqest());
    yield put(fetchEmployeeSuccess(fetchedData));
}

// Watcher
export function* watchFetchEmployee() {
    yield takeLatest(FETCH_EMPLOYEE_REQUEST_SAGA, fetchEmployee);
}

export default watchFetchEmployee;
