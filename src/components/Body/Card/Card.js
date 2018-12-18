import React from "react";
import "./Card.css";
import GreenFire from "../../../Assets/GreenFire.svg";
import RedFire from "../../../Assets/RedFire.png";

const Card = (props) => (
    <div className="menu-card">
      <div className="menu-card-image">
      { 
        (props.color === "green") ? 
        (<img src={ GreenFire} alt="Red-Fire" />) :
        (<img src={RedFire} alt="Red-Fire" />) 
      }
      </div>

      <div className="menu-card-headers">
        <header>Line Item Title</header>
        <p> Subheader here</p>
      </div>
      
      <div className="menu-card-details">
        <p>A detail</p>
      </div>
    </div>//end of menu-card
    )

export default Card;