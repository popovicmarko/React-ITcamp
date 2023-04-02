import React from "react";
import './App.css';
import logo from './logo.png';

function MyButton() {
  return (
    <button>
      Click to see the magic
    </button>
  );
}

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

      < div className='cointener'>
        <h1>Welcome to heroes</h1>
        <MyButton />
      </div>

    </div>
  );
}