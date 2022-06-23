import { useState, useEffect } from 'react';
import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://cc8mwqveq6.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://dqdghw8lqd.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: "CJvKnbJwMwKz9BXMmAo21iUXE3HHnyqG33qBf6Q1o2Mk",
});

const SearchEmps = () => {

  const { entities } = client;

  const[name, setName] = useState("");

  async function asyncSearchEmp() {
    console.log('Testing...');
    // window.alert("Searched employee!");
    const idResponse = await entities.employee.list({
      filter: {
        name: {
         contains: name,
        },
      },
    });

    const employeeResponse = await entities.employee.get(
      idResponse.items[0]._id
    );      
      console.log(idResponse.items[0]._id);
      console.log(employeeResponse);

      let t1 = idResponse.items[0].name;
      let t2 = ":\nAge: ";
      let t3 = idResponse.items[0].age;
      let t4 = "\nGender: ";
      let t5 = idResponse.items[0].gender;
      let t6 = "\nHeight (*In inches): ";
      let t7 = idResponse.items[0].height;
      let t8 = " in(s)\nWeight (*In pounds): ";
      let t9 = idResponse.items[0].weight;
      let t10 = " Ib(s)\nTemperature (*In degrees Fahrenheit): ";
      let t11 = idResponse.items[0].temperature;
      let t12 = " ℉\nPulse Rate (*In BPM): ";
      let t13 = idResponse.items[0].pulse;
      let t14 = " BPM\nBlood Pressure (*In mm Hg): ";
      let t15 = idResponse.items[0].pressure;
      let t16 = " mm Hg\nRespiration Rate (*In breaths per minute): ";
      let t17 = idResponse.items[0].respiration;
      let t18 = " Breath(s) Per Minute\nAverage Hours of Exercise Per Week: ";
      let t19 = idResponse.items[0].exercise;
      let t20 = " Hour(s)\nVacation Balance (*In Days): ";
      let t21 = idResponse.items[0].vacation;
      let t22 = " Day(s)\nAverage Hours of Work Per Week: ";
      let t23 = idResponse.items[0].work;
      let t24 = " Hour(s)";

      let result = t1.concat(" ", t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17
      , t18, t19, t20, t21, t22, t23, t24);

      window.alert(result);
     }

    function handleSubmit(e) {
      e.preventDefault();
      //asyncSearchEmp(); 
      console.log('You clicked submit.');
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    <label>
    <button onClick={asyncSearchEmp}><i className="fa fa-search"></i></button>
    <input type="text" placeholder='Search By Name: ' value={name} onChange={(e)=> {setName(e.target.value)}}/><br/>
    </label>
    </form>
    </div>
  );
  
}

export default SearchEmps;
