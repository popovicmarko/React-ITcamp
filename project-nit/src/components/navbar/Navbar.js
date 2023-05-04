import './Navbar.css';
import logo from './logo.png';
import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/hotels'>Hotels</NavLink>
      <NavLink to='/team'>My Team</NavLink>
      <NavLink to='/aboutas'>About me</NavLink>
      <NavLink to='/login'>Log in</NavLink>
      {/* <NavLink to='/register'>Registar</NavLink> */}
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}


export default function MyApp() {
  return (
    <div className="all">
      <div className="header">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
}