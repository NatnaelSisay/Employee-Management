import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = (props) => {
    return (
        <div>
            Employee List
            <Link to="/edit">Edit</Link>
        </div>
    );
};

export default EmployeeList;
