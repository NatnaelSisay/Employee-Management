import axios from "axios";
const BASE_URL = "localhost";

// make fetch request
const fetchEmplyee = () => {
    return axios.get(BASE_URL);
};

const updateEmployee = (userId, data) => {
    return axios.put(BASE_URL, { userId, data });
};

const deleteEmployee = () => {
    return axios.delete(BASE_URL);
};

const createEmployee = (data) => {
    return axios.post(BASE_URL, data);
};

export { fetchEmplyee, updateEmployee, deleteEmployee, createEmployee };
