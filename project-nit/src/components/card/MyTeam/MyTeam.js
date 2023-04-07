import './MyTeam.css';
import React from "react";
import PersonCard from '../personalCard/PersonalCard';
export default function MyTeam() {
  return (
    <div className='cardContainer' id='card'>
      <h1>My Team</h1>
      <div className='container'>
        <PersonCard img='https://avatars.githubusercontent.com/u/104674760?v=4' name='Marko Popovic' location='Tutin, Serbia' about='I am a student of the State University of Novi Pazar in Novi Pazar, front-end devloper and a passionate learner.' />
        <PersonCard img='https://prod-api.154310543964.hellopublic.com/static/users/images/HnYZcdRdLByHLS88s4aAvVUn60BtfLF3-thumbnail-300x300.jpg' name='Dejan Aksovic' location='Novi Pazar, Serbia' about='I am a student of the State University of Novi Pazar in Novi Pazar, front-end devloper and a passionate learner.' />
        <PersonCard img='https://avatars.githubusercontent.com/u/11474127?v=4' name='Ramiz Sabovic' location='Novi Pazar, Serbia' about='I am a student of the State University of Novi Pazar in Novi Pazar, front-end devloper and a passionate learner.' />
      </div>
    </div>
  );
}