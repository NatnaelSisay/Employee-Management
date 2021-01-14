import {
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
} from "../types";

const deleteEmployeeRequest = () => ({ type: DELETE_EMPLOYEE_REQUEST });
const deleteEmployeeSuccess = () => ({ type: DELETE_EMPLOYEE_SUCCESS });
const deleteEmployeeFailure = (message) => ({
    type: DELETE_EMPLOYEE_FAILURE,
    payload: message,
});

export { deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure };
