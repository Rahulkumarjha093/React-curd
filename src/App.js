//import logo from './logo.svg';
//import './App.css';
//import User from './User';
//import {useState} from 'react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>

      <Nav />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );

}


export default App;