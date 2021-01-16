import React from "react";
import { connect } from "react-redux";
import { fetchOneEmployeeApi } from "../../api";

import "./index.css";
import Form from "../UI/EmployeeForm";
import { Redirect } from "react-router-dom";

class EditEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            data: {
                id: 0,
                employeeName: "",
                dateOfBirth: "",
                gender: "",
                salary: "",
            },
        };

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const { params } = this.props.match;
        const { id } = params;
        fetchOneEmployeeApi(id)
            .then((res) => {
                // console.log("Response from server =>", res.data.data);
                this.setState({ data: res.data.data });
            })
            .catch((error) =>
                console.log("Edit Employee Fetch [ ERROR ]", error)
            );
    }

    submit(e) {
        e.preventDefault();
        this.props.dispatch({
            type: "UPDATE_EMPLOYEE_REQUEST_SAGA",
            payload: this.state.data,
        });
        this.setState({ success: true });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ data: { ...this.state.data, [name]: value } });
    }

    render() {
        const { employeeName, gender, salary, dateOfBirth } = this.state.data;
        return (
            <div>
                {this.state.success && <Redirect to="/" />}
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

const mapStateToProps = (state) => {
    const { employee } = state.updateEmployee;
    return { employee };
};

export default connect(mapStateToProps, null)(EditEmployee);
