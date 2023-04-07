import React from "react";
import ReactPlayer from 'react-player'
import './App.css';
import NavBar from './components/navBar/navbar';
import Card from './components/personal-card/App';

function MyButton() {
  return (
      <button>
        Click to see the magic
      </button>
  );
}

// function NavBar() {
//   return (
//     <div className="nav">
//       <h2>Home</h2>
//       <h2>Heroes</h2>
//       <h2>My Team</h2>
//     </div>
//   );
// }
// function Logo() {
//   return (
//     <div className="logo">
//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }
function Video() {
  return (
    <div className="video">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );
}


export default function MyApp() {
  return (
    <div className="all">
        <NavBar />

      < div className='cointener'>
        <h1>Welcome to heroes</h1>
        <MyButton />
        <Video />
      </div>

      <Card />

    </div>
  );
}