import React, {Component} from 'react';
import "./Main.css";
import Card from "../Card/Card.js";
import Footer from "../Footer/Footer.js";
import Columns from "../Columns/Columns.js";

class Main extends Component {
    state = {
        color: "green"
    }
    componentWillReceiveProps(newProps){
        this.setState({
            color: newProps.color
        })
        console.log("Color in Main:", this.state.color)
    }

    render() {
        return (
            <div className="container">
                <div className="left-container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Footer />
                </div>

                <div className="right-container">
                    <Columns
                    color={this.state.color} />
                </div>
            </div>//end of container
        );
    }
}

export default Main;
