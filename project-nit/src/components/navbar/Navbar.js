import './Navbar.css';
import logo from './logo.png';
import React from "react";

function NavBar() {
  return (
    <div className="nav">
      <a href="#top">Home</a>
      <a href="#card">My Team</a>
      <a href="#aboutMe">About me</a>
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