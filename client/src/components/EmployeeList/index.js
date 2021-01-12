import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
const EmployeeList = (props) => {
    return (
        <div>
            Employee List
            <Link to="/edit">
                <Button>Edit</Button>
            </Link>
        </div>
    );
};

export default EmployeeList;
