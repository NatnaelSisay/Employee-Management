import React from "react";
import Row from "./EmployeeRow";
const EmployeeListView = (props) => {
    const { data } = props;
    return (
        <div>
            {data &&
                data.map(({ id, employeeName, dateOfBirth }) => {
                    return (
                        <Row
                            key={id}
                            employeeName={employeeName}
                            dateOfBirth={dateOfBirth}
                            id={id}
                        />
                    );
                })}
        </div>
    );
};

export default EmployeeListView;
