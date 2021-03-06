import React from "react";
import { connect } from "react-redux";

import "./index.css";
import EmployeeListView from "./EmployeeListView";

class EmployeeList extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch({ type: "FETCH_EMPLOYEE_REQUEST_SAGA" });
        }, 1000);
    }

    render() {
        const { employee, loading } = this.props;

        return (
            <div className="employeeListContainer">
                {loading ? "Loading ..." : <EmployeeListView data={employee} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { loading, error, employee } = state.fetchEmployee;
    return { loading, error, employee };
};

export default connect(mapStateToProps, null)(EmployeeList);
