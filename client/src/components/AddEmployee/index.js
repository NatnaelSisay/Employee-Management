import React from "react";
import "./index.css";

import Form from "../UI/EmployeeForm";

class AddEmployee extends React.Component {
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
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { employeeName, gender, dateOfBirth, salary } = this.state;
        return (
            <div>
                <Form
                    employeeName={employeeName}
                    gender={gender}
                    dateOfBirth={dateOfBirth}
                    salary={salary}
                    handleChange={this.handleChange}
                    submit={this.submit}
                    label={"Submit"}
                />
            </div>
        );
    }
}

export default AddEmployee;
