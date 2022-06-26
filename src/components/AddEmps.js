import {useState} from 'react';
import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: ``,
  websocketUrl: ``,
  apiKey: "",
});

const AddEmps = () => {

  const { entities } = client;

  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[gender, setGender] = useState("");
  const[height, setHeight] = useState("");
  const[weight, setWeight] = useState("");
  const[temperature, setTemperature] = useState("");
  const[pulse, setPulse] = useState("");
  const[pressure, setPressure] = useState("");
  const[respiration, setRespiration] = useState("");
  const[exercise, setExercise] = useState("");
  const[vacation, setVacation] = useState("");
  const[work, setWork] = useState("");

  async function asyncAddEmployee() {
    console.log('Testing...');
    window.alert("Added employee!");
      const employeeResponse = await entities.employee.add({
        name: name,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        temperature: temperature,
        pulse: pulse,
        pressure: pressure,
        respiration: respiration,
        exercise: exercise,
        vacation: vacation,
        work: work,
      });
      console.log(employeeResponse);
    }

    function handleSubmit(e) {
      e.preventDefault();
      asyncAddEmployee();
      console.log('You clicked submit.');
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    <label>
    Name: 
    <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/><br/>
    </label>
    <label>
    Age: 
    <input type="text" value={age} onChange={(e)=> {setAge(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Gender:<br/>
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
    </label>
    </form>
    <button onClick={asyncAddEmployee}>Add Employee</button>
    </div>
  );
};

export default AddEmps;
