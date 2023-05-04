import { useState } from "react";
import React from "react";
import "./PersonalCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
    function handleClick({visee, doaj}) {

    }
    return (


        <div className="card">
            <div className="firstPart">
                <img
                    src={props.img}
                    alt={"profile_img"}
                    className="img"
                />
                <h1>{props.name}</h1>
                <FaGithub style={{ width: "50px", height: "50px" }} />
                <h3>{props.location}</h3>
            </div>
            <div className="secondPart">
                <p>{props.about}</p>
                <a
                    href="https://github.com/dzenankosuta?tab=repositories"
                    target="blank"
                    style={{ color: "darkblue" }}
                >
                </a>
            </div>
            <button> Visee </button>
        </div>

    );
}
