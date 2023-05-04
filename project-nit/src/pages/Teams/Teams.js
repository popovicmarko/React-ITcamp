import React, { useState } from "react";
import "./Teams.css";
import teamsJSON from "../../common/teams.json";
import { Link, useNavigate } from "react-router-dom";
import TeamCard from "../../components/card/TeamCard/TeamCard";

export default function Teams() {
  const navigation = useNavigate();
  const [teams, setTeams] = useState(teamsJSON);
  const [extended, setExtended] = useState(null);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  return (
    <div>
      {teams.map((team) => (
        <TeamCard
          name={team.name}
          imageUrl={team.imageUrl}
          opis={team.opis}
          vise={team.vise}
          deleteTeam={() => deleteTeam(team.id)}
          extended={extended}
          setExtended={setExtended}
          id={team.id}
        />
      ))}
    </div>
  );
}
