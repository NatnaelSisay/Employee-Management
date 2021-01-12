import React from "react";
import "./index.css";
// FORM SHOULD BE GENERAL PURPOSE FOR Adding and Editing

const Form = ({
    employeeName,
    gender,
    salary,
    dateOfBirth,
    handleChange,
    submit,
    label = "Update",
}) => {
    return (
        <div className="container">
            <div className="formContainer">
                <form onSubmit={submit} className="form">
                    <div>
                        <label htmlFor="employeeName" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="employeeName"
                            name="employeeName"
                            className="textInput"
                            value={employeeName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="gender" className="label">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            className="textInput"
                            value={gender}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="salary" className="label">
                            Salary
                        </label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            className="textInput"
                            value={salary}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="dateOfBirth" className="label">
                            Date Of Birth
                        </label>
                        <input
                            type="text"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="textInput"
                            value={dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input type="submit" className="submit" value={label} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
