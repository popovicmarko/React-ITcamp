import React, { useEffect, useState } from "react";
import "./TeamCard.css";
import { BASE_URL } from "../../../App";

function TeamCard({
  name,
  opis,
  imageUrl,
  vise,
  deleteTeam,
  extended,
  setExtended,
  id,
}) {
  const [closed, setClosed] = useState(true);
  // console.log({ BASE_URL }); radi primera
  useEffect(() => {
    if (extended !== null && extended !== id) {
      setClosed(true);
    }
  }, [extended]);

  useEffect(() => {
    if (!closed) {
      setExtended(id);
    } else {
      setExtended(null);
    }
  }, [closed]);
  return (
    <div className="cardContainer2">
      <div className="container">
          <h2>{name}</h2>
          <img src={imageUrl} alt="slika" />
        <p>{opis} {!closed && (
        <div className="info">
          <p>{vise}</p>
        </div>
      )}</p>
        
        <div className="footer">
          <button onClick={deleteTeam}>Izbrisi clana tima </button>
          <button
            onClick={() => {
              setClosed(!closed);
            }}
          >
            {closed ? <span className="color">Prikazi vise o clanu</span> : <span>Prikazi manje o clanu</span>}
          </button>
        </div>

      </div>
      
    </div>
  );
}

export default TeamCard;
