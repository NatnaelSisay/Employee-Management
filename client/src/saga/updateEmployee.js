import { call, put, takeLatest } from "redux-saga/effects";
import { updateEmployeeRequest, updateEmployeeSuccess } from "../store/actions";
import { updateEmployeeApi } from "../api";

export function* updateEmployee(employee) {
    // console.log("Update Employee =>", payload);
    yield put(updateEmployeeRequest());

    const { data } = yield call(updateEmployeeApi, employee.payload);
    // console.log(data);

    yield put(updateEmployeeSuccess(data));
}

export function* editEmployee(payload) {
    yield put(updateEmployeeRequest());
    console.log("Goona Edit Employeee on the database");
}

export default function* watchUpdateEmployee() {
    yield takeLatest("UPDATE_EMPLOYEE_REQUEST_SAGA", updateEmployee);
}
