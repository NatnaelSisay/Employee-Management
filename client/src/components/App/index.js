import React from "react";
import "./index.css";
import { Switch, Route, Link } from "react-router-dom";

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
                <h1>
                    <Link to="/" className="link">
                        {" "}
                        Employee Management
                    </Link>
                </h1>
                <div>
                    <button>
                        <Link className="link" to="/add">
                            {" "}
                            Add +{" "}
                        </Link>
                    </button>
                </div>
            </header>

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
        </div>
    );
}

export default App;
