import React from 'react';
import './App.css';
import {FaGithub} from 'react-icons/fa'

function PersonCard() {
    return (
        <div className="card">
                
            <h2>Marko Popovic  <FaGithub /> </h2>
            <div className="card__image">
                <img src='https://avatars.githubusercontent.com/u/104674760?v=4' />
            </div>

            <div className="card-content">
                <h3>Age: 25</h3>
                <h4>Novi Pazar</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
        </div>
    );
}


export default function MyApp() {
    return (
        <div className="all">
            <PersonCard />
        </div>
    );
}

