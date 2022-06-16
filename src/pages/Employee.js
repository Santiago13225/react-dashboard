import React from "react";
import "./Character.css"
import { useEmployee } from "../empHooks/useEmployee";
import { useParams } from "react-router";

export default function Employee() {
    const { id } = useParams()

    const { data, loading, error } = useEmployee(id);
    
if(error) return <div>Error!</div>

if(loading) return <div>Loading 1s and 0s...</div>

    return <div className="Employee">
        <img src={data.Employee.image} width={750} height={750}/>
        <div className="Employee-content">
            <h1>{data.employee.name}</h1>
            <p>{data.employee.gender}</p>
            <div className="Employee-episode">
                {data.employee.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>episode.episode</b>
                    </div>
                }) }
            </div>
        </div>
    </div>;
}