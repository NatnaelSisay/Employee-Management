import {
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
} from "../types";
const initialState = {
    loading: false,
    success: false,
    error: "",
};
const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_EMPLOYEE_REQUEST:
            return { ...state, loading: true };
        case DELETE_EMPLOYEE_SUCCESS:
            return { ...state, loading: false, success: true };
        case DELETE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default deleteReducer;
