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
        const { id, name, dateOfBirth } = this.props;

        return (
            <div className="rowContainer" key={id}>
                <p className="employeeName">{name}</p>
                <p>{dateOfBirth}</p>
                <div className="buttonContainer">
                    <button
                        className="deleteButton"
                        onClick={() => this.handleDelete(id)}
                    >
                        Delete
                    </button>
                    <button className="editButton">
                        <Link to="/edit">Edit</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(Row);
