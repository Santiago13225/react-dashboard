import "./Main.css";
import React from 'react';
import herky2 from "../../Assets/herky2.svg";
import ListGenAvg from "../listingEmps/ListGenAvg";
import ListMaleAvg from "../listingEmps/ListMaleAvg";
import ListFemaleAvg from "../listingEmps/ListFemaleAvg";
import AddEmps from "../managingEmps/AddEmps";
import EditEmps from "../managingEmps/EditEmps";
import DelEmps from "../managingEmps/DelEmps";

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={herky2} alt="herky2"/>
                    <div className="main__greeting">
                        <h1>Hello User!</h1>
                        <p>Welcome to your admin dashboard.</p>
                    </div>
                </div>

                <div className="main__cards">
                
                    <div className="card">
                        <i className="fa fa-chart-line fa-2x"></i>
                        <ListGenAvg/>
                    </div>
                    <div className="card">
                        <i className="fa fa-person fa-2x"></i>
                        <ListMaleAvg/>
                    </div>
                    <div className="card">
                        <i className="fa fa-person-dress fa-2x"></i>
                        <ListFemaleAvg/>
                    </div>
                    <div className="card">
                        <i className="fa fa-trash-can fa-2x text-red"></i>
                        <DelEmps/>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1><i className="fa fa-solid fa-user-group"></i>Add Employee:</h1>
                                <AddEmps/>
                            </div>         
                        </div>
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1><i className="fa fa-solid fa-user-gear"></i>Edit Employee:</h1>
                                <EditEmps/>
                            </div>
                        </div>
                        <div className="charts__right__cards">
                            {/* <AddEmps/> */}
                            {/* <div className="card1">
                                <h1>Average Income</h1>
                                <p>$75,300</p>
                            </div> */}
                        </div>
                    </div>
                </div>

                 <div className="stuff">
                    {/* <DisplayEmps/> */}
                </div> 

            </div>
        </main>
    )
}

export default Main;
