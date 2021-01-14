import React from "react";
import { connect } from "react-redux";

import "./index.css";
import Form from "../UI/EmployeeForm";

class EditEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: "",
            dateOfBirth: "",
            gender: "",
            salary: "",
        };

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.dispatch({ type: "UPDATE_EMPLOYEE_REQUEST_SAGA" });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { employeeName, gender, salary, dateOfBirth } = this.state;
        return (
            <div>
                <Form
                    employeeName={employeeName}
                    gender={gender}
                    dateOfBirth={dateOfBirth}
                    salary={salary}
                    handleChange={this.handleChange}
                    submit={this.submit}
                />
            </div>
        );
    }
}

export default connect()(EditEmployee);
