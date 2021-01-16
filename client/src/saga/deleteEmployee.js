import { call, put, takeEvery } from "redux-saga/effects";
import { deleteEmployeeRequest, deleteEmployeeSuccess } from "../store/actions";
import { deleteEmployeeApi } from "../api";

function* deleteEmployee(payload) {
    const id = payload.payload;

    yield put(deleteEmployeeRequest());
    yield call(deleteEmployeeApi, id);
    yield put(deleteEmployeeSuccess());

    // Fetch The updated Data again
    yield put({ type: "FETCH_EMPLOYEE_REQUEST_SAGA" });
}

export default function* watchDeleteEmployee() {
    yield takeEvery("DELETE_EMPLOYEE_REQUEST_SAGA", deleteEmployee);
}
