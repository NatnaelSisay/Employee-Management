import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EmployeeList from "../EmployeeList";
import AddEmployee from "../AddEmployee";
import EditEmployee from "../EditEmployee";

function About() {
    return <div>About page</div>;
}
function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Employee Management</h1>
                <div>
                    <button type="button">Add +</button>
                </div>
            </header>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <EmployeeList />
                    </Route>
                    <Route path="/add" exact>
                        <AddEmployee />
                    </Route>

                    <Route path="/edit">
                        <EditEmployee />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
