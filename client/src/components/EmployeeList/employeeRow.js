import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.props.dispatch({
            type: "DELETE_EMPLOYEE_REQUEST_SAGA",
            payload: id,
        });
    }

    render() {
        const { id, employeeName, dateOfBirth } = this.props;
        const to = `/edit/${id}`;
        return (
            <div className="rowContainer" key={id}>
                <p className="employeeName">{employeeName}</p>
                <p>{dateOfBirth}</p>
                <div className="buttonContainer">
                    <button
                        className="deleteButton"
                        onClick={() => this.handleDelete(id)}
                    >
                        Delete
                    </button>
                    <button className="editButton">
                        <Link to={to}>Edit</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(Row);
