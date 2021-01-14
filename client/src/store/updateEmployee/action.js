import {
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
} from "../types";

const updateEmployeeRequest = () => ({ type: UPDATE_EMPLOYEE_REQUEST });
const updateEmployeeSuccess = () => ({ type: UPDATE_EMPLOYEE_SUCCESS });
const updateEmployeeFailure = (message) => ({
    type: UPDATE_EMPLOYEE_FAILURE,
    payload: message,
});

export { updateEmployeeRequest, updateEmployeeSuccess, updateEmployeeFailure };
