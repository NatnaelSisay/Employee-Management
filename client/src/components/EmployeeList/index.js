import React from "react";

import Button from "../UI/Button";

import "./index.css";
import Row from "./EmployeeRow";
import EmployeeListView from "./EmployeeListView";

const fetchedData = [
    {
        id: 1,
        name: "Java",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 2,
        name: "Alemlate",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 3,
        name: "Jemal",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 4,
        name: "Temesgen",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 5,
        name: "Fifty",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },

    {
        id: 6,
        name: "Tedi",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 7,
        name: "Mere",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
];

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: "",
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            this.setState({ data: fetchedData });
        }, 1000);
    }

    render() {
        const { data, loading } = this.state;
        return (
            <div className="employeeListContainer">
                {loading ? "Loading ..." : <EmployeeListView data={data} />}
            </div>
        );
    }
}

export default EmployeeList;
