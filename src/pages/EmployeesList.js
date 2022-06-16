import React from "react";
import { useEmployees } from "../empHooks/useEmployees";
import "./EmployeeList.css";
import { Link } from "react-router-dom";

export default function EmployeesList() {

    const { error, loading, data } = useEmployees();

    if (loading) return <div>spinner...</div>;

    if (error) return <div>uh oh...</div>;

    return (
      <div className="EmployeeList">
        {data.employees.results.map(employee => {
            return (
            <div>
              <Link to={`/${employee.id}`}>
                <img src={employee.image}/>
                <h2>{employee.name}</h2>
              </Link>
            </div>
            );
        })}
    </div>
    );
}