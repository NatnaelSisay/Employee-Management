import React from "react";

import Button from "../UI/Button";

import "./index.css";
import Row from "./employeeRow";

const data = [
    {
        id: 1,
        name: "Java",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 2,
        name: "Alemlate",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 3,
        name: "Jemal",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 4,
        name: "Temesgen",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 5,
        name: "Fifty",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },

    {
        id: 6,
        name: "Tedi",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 7,
        name: "Mere",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
];

const EmployeeList = (props) => {
    return (
        <div className="employeeListContainer">
            <div>
                {data.map(({ id, name, dateOfBirth }) => {
                    return (
                        <Row name={name} dateOfBirth={dateOfBirth} id={id} />
                    );
                })}
            </div>
        </div>
    );
};

export default EmployeeList;
