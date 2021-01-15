import axios from "axios";
const BASE_URL = "http://localhost:3000";

// make fetch request
const fetchEmplyeeApi = () => {
    return axios.get(BASE_URL);
};

const fetchOneEmployeeApi = (id) => {
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

export {
    fetchEmplyeeApi,
    fetchOneEmployeeApi,
    updateEmployee,
    deleteEmployee,
    createEmployee,
};
