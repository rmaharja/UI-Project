import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Body/Main/Main";



class App extends Component {
  state = {
    color:"green"
  }
  greenOnClick = (e) => {
    e.preventDefault();
    console.log("Green Button Clicked");
    this.setState({
        color: "green"
    })
  }
  redOnClick = (e) => {
    e.preventDefault();
    console.log("Red Button Clicked");
    this.setState({
        color: "red"
    })
}

  render() {
    return (
      <div className="App">
        <Navbar
        greenOnClick={this.greenOnClick}
        redOnClick={this.redOnClick}
        color={this.state.color}
        />
        <Main 
        color={this.state.color}/>
      </div>
    );
  }
}

export default App;
