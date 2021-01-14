import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
} from "../types";

const initialState = {
    loading: false,
    success: false,
    error: "",
};

const addEmployee = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_REQUEST:
            return { ...state, loading: true };

        case ADD_EMPLOYEE_SUCCESS:
            return { ...state, loading: false, success: true };

        case ADD_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default addEmployee;
