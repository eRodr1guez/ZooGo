import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = (props) => {
  return (
    <div className="animal-card">
      <Link to="/scan">
        <img src={props.src} alt={props.name} width="100%" />
      </Link>
    </div>
  );
};

export default AnimalCard;
