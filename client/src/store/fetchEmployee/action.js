import {
    FETCH_EMPLOYEE_REQUEST_NO_SAGA,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE,
} from "../types";

const fetchEmployeeReqest = () => {
    return {
        type: FETCH_EMPLOYEE_REQUEST_NO_SAGA,
    };
};

const fetchEmployeeSuccess = (result) => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: result,
    };
};

const fetchEmployeeFailure = (message) => {
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: message,
    };
};

export { fetchEmployeeReqest, fetchEmployeeSuccess, fetchEmployeeFailure };
