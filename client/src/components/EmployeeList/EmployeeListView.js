import React from "react";
import Row from "./EmployeeRow";
const EmployeeListView = (props) => {
    const { data } = props;
    return (
        <div>
            {data &&
                data.map(({ id, name, dateOfBirth }) => {
                    return (
                        <Row
                            key={id}
                            name={name}
                            dateOfBirth={dateOfBirth}
                            id={id}
                        />
                    );
                })}
        </div>
    );
};

export default EmployeeListView;
