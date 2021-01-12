import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Row = (props) => {
    const { id, name, dateOfBirth } = props;
    return (
        <div className="rowContainer">
            <p className="employeeName">{name}</p>
            <p>{dateOfBirth}</p>
            <div className="buttonContainer">
                <button className="deleteButton">Delete</button>
                <button className="editButton">Edit</button>
            </div>
        </div>
    );
};

export default Row;
