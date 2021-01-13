import {
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE,
} from "../types";

const initialState = {
    loading: false,
    employee: [],
    error: "",
};

const fetchEmployee = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_REQUEST:
            return { ...state, loading: true };

        case FETCH_EMPLOYEE_SUCCESS:
            return { ...state, loading: false, employee: action.payload };

        case FETCH_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default fetchEmployee;
