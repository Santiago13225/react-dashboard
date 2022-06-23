import { useState, useEffect } from 'react';
import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://cc8mwqveq6.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://dqdghw8lqd.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: "CJvKnbJwMwKz9BXMmAo21iUXE3HHnyqG33qBf6Q1o2Mk",
});

const DelEmps = () => {

  const { entities } = client;

  const[name, setName] = useState("");

  async function asyncDelEmps() {
    console.log('Testing...');
    window.alert("Deleted employee!");
    const idResponse = await entities.employee.list({
      filter: {
        name: {
         contains: name,
        },
      },
    });

    const endResponse = await entities.employee.remove(
        idResponse.items[0]._id
    );
    //console.log(idResponse.items[0]._id);
    //console.log(employeeResponse);
      console.log(endResponse);
     }

    function handleSubmit(e) {
      e.preventDefault();
      //asyncDelEmps(); 
      console.log('You clicked submit.');
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    <label>
    <button onClick={asyncDelEmps}><i className="fa fa-solid fa-trash-can"></i></button>
    <input type="text" placeholder='Delete By Name: ' value={name} onChange={(e)=> {setName(e.target.value)}}/><br/>
    </label>
    </form>
    </div>
  );
  
}

export default DelEmps;
