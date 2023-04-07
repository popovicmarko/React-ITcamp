import './AboutMe.css'
import React from "react";
export default function AboutMe() {
  return (
    <div className="aboutMe" id='aboutMe'>
      <h1>About me</h1>
      <div className='aboutMeConcent'>
        <div className='aboutMeImgName'>
            <h2>Marko Popovic</h2>
            <img src={"https://avatars.githubusercontent.com/u/104674760?v=4"} alt={"profile_img"} className="img" />
        </div>
        <div className='aboutMeText'>
            <p> I graduated from high school in Tutin and am currently completing my studies in software engineering at the State University in Novi Pazar. I also completed an "IT Camp" course at NIT center, where I gained knowledge in front-end technologies like HTML, CSS, JavaScript and React. I believe that my skills and knowledge in software engineering and web programming, as well as my desire to constantly improve, make me a good program.</p>   
        </div>
        
      </div>
      <p>
        
      </p>
    </div>
  );
}
