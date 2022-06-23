import {useState} from 'react';
import './App.css';
import React from 'react';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://cc8mwqveq6.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://dqdghw8lqd.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: "CJvKnbJwMwKz9BXMmAo21iUXE3HHnyqG33qBf6Q1o2Mk",
});

// function MyApp() {

//   const { entities } = client;

//   const[name, setName] = useState("");
//   const[_id, setid] = useState("");
//   const[age, setAge] = useState("");
//   const[gender, setGender] = useState("");
//   const[height, setHeight] = useState("");
//   const[weight, setWeight] = useState("");
//   const[temperature, setTemperature] = useState("");
//   const[pulse, setPulse] = useState("");
//   const[pressure, setPressure] = useState("");
//   const[respiration, setRespiration] = useState("");
//   const[exercise, setExercise] = useState("");
//   const[vacation, setVacation] = useState("");
//   const[work, setWork] = useState("");

//   async function asyncSearchEmp() {
//     console.log('Hello?');

//     const idResponse = await entities.employee.list({
//       filter: {
//         name: {
//          contains: name,
//         },
//       },
//     });
     
//     const employeeResponse = await entities.employee.get(
//       idResponse.items[0]._id
//     );      
      
//       console.log(idResponse.items[0]._id);
//       console.log(employeeResponse);
//      }

//     function handleSubmit(e) {
//       e.preventDefault();
//       //asyncSearchEmp();
//       console.log('You clicked submit.');
//     }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//     <label>
//     Name: 
//     <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/><br/>
//     </label>    
//     </form>
//     <button onClick={asyncSearchEmp}>Search Me</button>
//     </div>
//   );
// }

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      {/* <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default App;
