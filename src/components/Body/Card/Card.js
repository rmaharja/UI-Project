import React from "react";
import "./Card.css";
import GreenFire from "../../../Assets/GreenFire.svg";

const Card = (props) => (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={GreenFire} alt="Green-Fire" />
      </div>

      <div className="menu-card-headers">
        <header>Line item title</header>
        <p>Subheader here</p>
      </div>
      
      <div className="menu-card-details">
        <p>A detail</p>
      </div>
    </div>//end of menu-card
)

export default Card;