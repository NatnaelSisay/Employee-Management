import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
} from "../types";

const addEmployeeRequest = () => ({
    type: ADD_EMPLOYEE_REQUEST,
});

const addEmployeeSuccess = () => ({
    type: ADD_EMPLOYEE_SUCCESS,
});

const addEmployeeFailure = (message) => ({
    type: ADD_EMPLOYEE_FAILURE,
    payload: message,
});

export { addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure };
