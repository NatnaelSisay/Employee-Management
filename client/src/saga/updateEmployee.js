import { call, put, takeLatest } from "redux-saga/effects";
import { updateEmployeeRequest, updateEmployeeSuccess } from "../store/actions";
import { fetchOneEmployeeApi } from "../api";

export function* updateEmployee(payload) {
    console.log(payload);
    const id = payload.params.id;

    yield put(updateEmployeeRequest());

    const { data } = yield call(fetchOneEmployeeApi, id);

    yield put(updateEmployeeSuccess(data[id - 1]));
}

export function* editEmployee(payload) {
    yield put(updateEmployeeRequest());
    console.log("Goona Edit Employeee on the database");
}

export default function* watchUpdateEmployee() {
    yield takeLatest("UPDATE_EMPLOYEE_REQUEST_SAGA", updateEmployee);
    yield takeLatest("UPDATE_EMPLOYEE_SAGA", editEmployee);
}
