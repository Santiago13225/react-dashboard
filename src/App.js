import {useState} from 'react';
import "./App.css";
import React from 'react';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CharactersList from "./query/CharactersList";
import { Route, Switch } from "react-router-dom";
import Character from './query/Character';
import Search from './query/Search';

//import CList from './query/CharacterList';


function MyApp() {
  return (
  <div className="App">
    <Route>
      <Route strict exact path="/" component={CharactersList} />
      <Route strict exact path="/search" component={Search} />
      <Route strict exact path="/id" component={Character} />
    </Route>
  </div>
  );
}

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
      <Search />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <CharactersList />
      <Character />
    </div>
  );
};

export default App;
