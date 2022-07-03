import {useState} from 'react';
import React from 'react';
//import { Route, Switch } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: ``,
  websocketUrl: ``,
  apiKey: "",
});

const List4QAvg = () => {

  const { entities } = client;

  async function asyncListEmployee() {
    console.log('Testing...');

    const employeeResponse = await entities.employee.list({
        filter: {
          age: {
            gt: 75,
          },
        },
      });

       let sum = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum += employeeResponse.items[i].age;
         // console.log("Age: ");
         // console.log(employeeResponse.items[i].age);
       }
       let avgAge = sum/(employeeResponse.items.length);
   
       let sum1 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum1 += employeeResponse.items[i].height;
         //console.log("Height: ");
         //console.log(employeeResponse.items[i].height);
       }
       let avgHeight = sum1/(employeeResponse.items.length);
   
       let sum2 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum2 += employeeResponse.items[i].weight;
         //console.log("Weight: ");
         //console.log(employeeResponse.items[i].weight);
       }
       let avgWeight = sum2/(employeeResponse.items.length);
   
       let sum3 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum3 += employeeResponse.items[i].temperature;
         //console.log("Temperature: ");
         //console.log(employeeResponse.items[i].temperature);
       }
       let avgTemperature = sum3/(employeeResponse.items.length);
   
       let sum4 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum4 += employeeResponse.items[i].pulse;
         //console.log("Pulse: ");
         //console.log(employeeResponse.items[i].pulse);
       }
       let avgPulse = sum4/(employeeResponse.items.length);
   
       let sum5 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum5 += employeeResponse.items[i].pressure;
         //console.log("Pressure: ");
         //console.log(employeeResponse.items[i].pressure);
       }
       let avgPressure = sum5/(employeeResponse.items.length);
   
       let sum6 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum6 += employeeResponse.items[i].respiration;
         //console.log("Respiration: ");
         //console.log(employeeResponse.items[i].respiration);
       }
       let avgRespiration = sum6/(employeeResponse.items.length);
   
       let sum7 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum7 += employeeResponse.items[i].exercise;
         //console.log("Exercise: ");
         //console.log(employeeResponse.items[i].exercise);
       }
       let avgExercise = sum7/(employeeResponse.items.length);
   
       let sum8 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum8 += employeeResponse.items[i].vacation;
         //console.log("Vacation: ");
         //console.log(employeeResponse.items[i].vacation);
       }
       let avgVacation = sum8/(employeeResponse.items.length);
   
       let sum9 = 0;
       for (let i = 0; i < employeeResponse.items.length; i++) {
         sum9 += employeeResponse.items[i].work;
         //console.log("Work: ");
         //console.log(employeeResponse.items[i].work);
       }
       let avgWork = sum9/(employeeResponse.items.length);

        //document.write(console.log(employeeResponse));
        //document.write(employeeResponse.items[0].name);
         console.log(employeeResponse);
         console.log(employeeResponse.items.length);
         console.log(avgAge);
   
         let t1 = "Aggregate Data for Males:\nAverage Age: ";
         let t2 = avgAge;
         let t3 = "\nAverage Height (*In inches): ";
         let t4 = avgHeight;
         let t5 = " in(s)\nAverage Weight (*In pounds): ";
         let t6 = avgWeight;
         let t7 = " Ib(s)\nAverage Temperature (*In degrees Fahrenheit): ";
         let t8 = avgTemperature;
         let t9 = " ℉\nAverage Pulse Rate (*In BPM): ";
         let t10 = avgPulse;
         let t11 = " BPM\nAverage Blood Pressure (*In mm Hg): ";
         let t12 = avgPressure;
         let t13 = " mm Hg\nAverage Respiration Rate (*In breaths per minute): ";
         let t14 = avgRespiration;
         let t15 = " Breath(s) Per Minute\nAverage Hours of Exercise Per Week: ";
         let t16 = avgExercise;
         let t17 = " Hour(s)\nAverage Vacation Balance (*In Days): ";
         let t18 = avgVacation;
         let t19 = " Day(s)\nAverage Hours of Work Per Week: ";
         let t20 = avgWork;
         let t21 = " Hour(s)";

         let result = t1.concat(" ", t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17
         , t18, t19, t20, t21);

         window.alert(result);

      console.log(employeeResponse);
     }

    function handleSubmit(e) {
      e.preventDefault();
      asyncListEmployee();
      console.log('You clicked list.');
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    </form>
    <button onClick={asyncListEmployee}>List 4Q Data</button>
    </div>
  );
};

export default List4QAvg;
