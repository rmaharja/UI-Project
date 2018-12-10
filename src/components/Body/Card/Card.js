import React, {Component} from "react";
import "./Card.css";
import GreenFire from "../../../Assets/GreenFire.svg";
import RedFire from "../../../Assets/RedFire.png";


class Card extends Component {

  state = {
    color: "green",
    fireColor: {
      "green": GreenFire,
      "red": RedFire
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({color: newProps.color})
    console.log("Color in Cards:", this.state.color)
}

  
  render () {
    return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={this.state.fireColor[this.state.color]} alt="Green-Fire" />
      </div>

      <div className="menu-card-headers">
        <header>Line item title</header>
        <p>Subheader here</p>
      </div>
      
      <div className="menu-card-details">
        <p>A detail</p>
      </div>
    </div>//end of menu-card
  )}
}

export default Card;