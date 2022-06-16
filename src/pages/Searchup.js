import {useState} from 'react';
import React from "react";
import { gql, useLazyQuery } from "@apollo/client";


const GET_EMPLOYEE_LOCATIONS = gql`
query blocksQuery {
    listVendia_BlockItems {
      Vendia_BlockItems {
        blockId
        blockHash
        previousBlockId
        commitTime
        transactions {
          _id
          _owner
          mutations
        }
      }
    }
    get_Employee(id: "") {
      name
      age
      height
      gender
      body_temperature
      blood_pressure
      avg_hours_of_work_per_week
      avg_hours_of_exercise_per_week
      pulse_rate
      respiration_rate
      vacation_balance
      weight
    }
  }
  
  mutation exampleMutation {
    __typename
  }
  
  subscription onBlockChanges {
    onAddVendia_Block {
      error
      result {
        blockId
        blockHash
        previousBlockId
        previousBlockHash
        commitTime
        transactions {
          _id
          _owner
          mutations
        }
      }
    }
  }  
`;







export default function Searchup() {

    const [name, setName] = useState("")

    const [getLocations, { loading, error, data, called }] = useLazyQuery(
        GET_EMPLOYEE_LOCATIONS, 
        {
            variables: {
                name,
            },
        }
    );

    console.log({
        called,
        loading,
        error,
        data,
    });

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search this ****</button>
            {loading && <div>Loading fire data...</div>}
            {error && <div>[Error]...</div>}
            {data && (
                <ul>
                    {data.employees.results.map((employee) => {
                        return <li>{employee.location.name}</li>;
                    })}
                </ul>
            )}
        </div>
    )
}