import React from "react";
import "./FriendCard.css";

const PlayerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Position(s):</strong> {props.position}
        </li>
        <li>
          <strong>Team(s):</strong> {props.team}
        </li>
        <li>
          <strong>Years Active:</strong> {props.years[0]} - {props.years.slice(-1)[0]}
        </li>
        <li>
          <strong>Class:</strong> {props.class}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removePlayer(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PlayerCard;
