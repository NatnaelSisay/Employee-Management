import axios from "axios";
const BASE_URL = "http://localhost:3000";

// make fetch request
const fetchEmplyeeApi = () => {
    return axios.get(BASE_URL);
};

const fetchOneEmployeeApi = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};
const updateEmployeeApi = (employee) => {
    return axios.patch(`${BASE_URL}/${employee.id}`, employee);
};

const deleteEmployee = () => {
    return axios.delete(BASE_URL);
};

const createEmployee = (employee) => {
    return axios.post(BASE_URL, employee);
};

export {
    fetchEmplyeeApi,
    fetchOneEmployeeApi,
    updateEmployeeApi,
    deleteEmployee,
    createEmployee,
};
