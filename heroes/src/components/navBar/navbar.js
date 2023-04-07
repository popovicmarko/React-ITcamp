import './navbar.css';
import logo from './logo.png';
import React from "react";

function NavBar() {
  return (
    <div className="nav">
      <h2>Home</h2>
      <h2>Heroes</h2>
      <h2>My Team</h2>
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