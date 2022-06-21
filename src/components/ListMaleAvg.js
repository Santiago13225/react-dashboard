import {useState} from 'react';
import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://cc8mwqveq6.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://dqdghw8lqd.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: "CJvKnbJwMwKz9BXMmAo21iUXE3HHnyqG33qBf6Q1o2Mk",
});

//CJvKnbJwMwKz9BXMmAo21iUXE3HHnyqG33qBf6Q1o2Mk

//function ListMaleAvg() {
const ListMaleAvg = () => {

  const { entities } = client;

  async function asyncListEmployee() {
    console.log('Testing...');

    const employeeResponse = await entities.employee.list(
      {
        filter: {
          gender: {
            contains: 'Man',
          },
        },
      }
       );
      // document.write(console.log(employeeResponse));
      //document.write(employeeResponse.items[0].name);
       // document.write(console.log(employeeResponse.items[0].name));
      // window.alert("console.log(employeeResponse.items[0].name)");
      console.log(employeeResponse);
      //window.alert(employeeResponse);
    //document.write(employeeResponse);
     }

    function handleSubmit(e) {
      e.preventDefault();
      asyncListEmployee();
      console.log('You clicked list.');
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    {/* <label>
    Name: 
    <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/><br/>
    </label> */}
    {/* <label>
    Age: 
    <input type="text" value={age} onChange={(e)=> {setAge(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Gender: 
    <input type="radio" value={gender} onChange={(e)=> {setGender("Woman")}}/>Female
    <input type="radio" value={gender} onChange={(e)=> {setGender("Man")}}/>Male
    <input type="radio" value={gender} onChange={(e)=> {setGender("Transgender")}}/>Transgender
    <input type="radio" value={gender} onChange={(e)=> {setGender("NonBinary")}}/>NonBinary
    <input type="radio" value={gender} onChange={(e)=> {setGender("NoResponse")}}/>No Response<br/>
    </label>
    <label>
    Height (*In inches): 
    <input type="text" value={height} onChange={(e)=> {setHeight(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Weight (*In pounds): 
    <input type="text" value={weight} onChange={(e)=> {setWeight(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Temperature (*In degrees Fahrenheit): 
    <input type="text" value={temperature} onChange={(e)=> {setTemperature(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Pulse Rate (*In BPM): 
    <input type="text" value={pulse} onChange={(e)=> {setPulse(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Blood Pressure (*In mm Hg):
    <input type="text" value={pressure} onChange={(e)=> {setPressure(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Respiration Rate (*In breaths per minute):
    <input type="text" value={respiration} onChange={(e)=> {setRespiration(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Average Hours of Exercise Per Week:
    <input type="text" value={exercise} onChange={(e)=> {setExercise(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Vacation Balance (*In Days):
    <input type="text" value={vacation} onChange={(e)=> {setVacation(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Average Hours of Work Per Week:
    <input type="text" value={work} onChange={(e)=> {setWork(parseInt(e.target.value))}}/><br/>
  </label>*/}
    </form>
    <button onClick={asyncListEmployee}>List Male Data</button>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="container">
//       {/* <MyApp/>  */}
//       <ListMaleAvg/>
//     </div>
//   );
// };

export default ListMaleAvg;
