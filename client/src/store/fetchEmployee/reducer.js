const fetchEmployee = (state = {}, action) => {
    switch (action.type) {
        case "fetch/request":
            return state;
        default:
            return state;
    }
};

export default fetchEmployee;
