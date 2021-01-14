import React from "react";
import { connect } from "react-redux";

import "./index.css";
import Form from "../UI/EmployeeForm";

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: "test",
            dateOfBirth: "test",
            gender: "Male",
            salary: "1Million",
        };

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.dispatch({
            type: "ADD_EMPLOYEE_REQUEST_SAGA",
            payload: this.state,
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { employeeName, gender, dateOfBirth, salary } = this.state;
        const { loading, error } = this.props;
        console.log("Loading add => ", loading);
        return (
            <div>
                {/* {success && <p> Successfully Added to the List</p>} */}
                {error && <p> Error : {error} </p>}
                {loading && <p>Loading ...</p>}

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

const mapStateToProps = (state) => {
    const { loading, success, error } = state.addEmployee;
    return { loading, success, error };
};

export default connect(mapStateToProps, null)(AddEmployee);
