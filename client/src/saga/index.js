import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchEmployeeReqest,
    fetchEmployeeSuccess,
    fetchEmployeeFailure,
} from "../store/actions";

import { FETCH_EMPLOYEE_REQUEST } from "../store/types";

const fetchedData = [
    {
        id: 1,
        name: "Java",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 2,
        name: "Alemlate",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 3,
        name: "Jemal",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 4,
        name: "Temesgen",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 5,
        name: "Fifty",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },

    {
        id: 6,
        name: "Tedi",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 7,
        name: "Mere",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
];

// Worker
export function* fetchEmployee() {
    console.log("Saga called");
    // yield put(fetchEmployeeReqest());
    yield put(fetchEmployeeSuccess(fetchedData));
}

// Watcher
export function* watchFetchEmployee() {
    yield takeLatest(FETCH_EMPLOYEE_REQUEST, fetchEmployee);
}

export default watchFetchEmployee;
