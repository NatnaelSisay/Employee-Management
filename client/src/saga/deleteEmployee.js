import { takeLatest } from "redux-saga/effects";

function* deleteEmployee(props) {
    yield console.log("Delete Saga Called");
}

export default function* watchDeleteEmployee() {
    yield takeLatest("DELETE_EMPLOYEE_REQUEST_SAGA", deleteEmployee);
}
