import {
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
} from "../types";

const initialState = {
    loading: true,
    employee: {},
    error: "",
};

const updateEmployee = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMPLOYEE_REQUEST:
            return { ...state, loading: true };

        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,

                employee: action.payload,
            };

        case UPDATE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default updateEmployee;
