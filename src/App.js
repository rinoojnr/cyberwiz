import React from 'react';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Getintouch from './Components/Getintouch';
import Home from './Routes/Home';
import Whoweare from './Routes/Whoweare';
function App() {

    
  return (
    
    <>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route element={"#project"}/>
      <Route element={"#Home"}/>
      <Route element={"#ourteam"}/>
      <Route element={"#contact"}/>
      <Route element={"#getintouch"}/>
    </Routes>
    </>
 
  );
}

export default App;
