
import './App.css';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from './components/aboutMe/AboutMe';
import MyTeam from './components/card/MyTeam/MyTeam';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/hotel/Hotel";
import Teams from "./pages/Teams/Teams";

export default function App() {
  return (
    <BrowserRouter>
         <Navbar />
      <Routes>
         
        <Route path = "/aboutas" element={<AboutMe />}  />
        <Route path = "/" element={<Home />}  />
        <Route path='/team' element={<MyTeam/>} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        
      </Routes>
    </BrowserRouter>
  );
}


