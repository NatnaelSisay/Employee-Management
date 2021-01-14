import { put, takeEvery } from "redux-saga/effects";
import { deleteEmployeeRequest, deleteEmployeeSuccess } from "../store/actions";

import { fetchedData } from "./fetchEmployee";

function* deleteEmployee(payload) {
    const id = payload.payload;

    yield put(deleteEmployeeRequest());
    // Call Api and do the work

    yield put(deleteEmployeeSuccess());
    yield put({ type: "FETCH_EMPLOYEE_REQUEST_SAGA" });

    console.log("deleting => ", id);
    for (let i = 0; i < fetchedData.length; i++) {
        if (fetchedData[i].id === id) {
            fetchedData[i].employeeName =
                fetchedData[i].employeeName + " [Deleted]";
        }
    }
}

export default function* watchDeleteEmployee() {
    yield takeEvery("DELETE_EMPLOYEE_REQUEST_SAGA", deleteEmployee);
}
