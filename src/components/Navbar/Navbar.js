import React, {Component} from "react";
import "./Navbar.css";
import GreenApp from "../../Assets/GreenApp.png";
import UserPic from "../../Assets/face_circle.png";
import RedApp from "../../Assets/RedApp.png";


const styles = {
    greenBtn: {
        backgroundColor: "white",
        color: "#DE2D00",
        border: "0.5px solid #DE2D00",
    },
    redBtn: {
        backgroundColor: "#DE2D00",
        color: "white",
        border: "0.5px solid #DE2D00",
    }
}

class Navbar extends Component {
    state = {
        color: "green"
    }
    componentWillReceiveProps(newProps){
        this.setState({
            color: newProps.color
        })
    }
    
    render () {

    const links = { 
    greenLinks: (
    <ul>
        <li>
            <a href="/" 
            id="green-btn"
            onClick={this.props.greenOnClick}>Green</a>
        </li>
        <li>
            <a href="/" 
            id="red-btn"
            onClick={this.props.redOnClick}>Red</a>
        </li>
     </ul>),
     redLinks: (
     <ul>
        <li>
            <a href="/" 
            id="green-btn"
            onClick={this.props.greenOnClick}
            style={styles.greenBtn}
            >Green</a>
        </li>
        <li>
            <a href="/" 
            id="red-btn"
            onClick={this.props.redOnClick}
            style={styles.redBtn}
            >Red</a>
        </li>
     </ul>
     )
    }

    return (
    <header className="navbar">
        <nav className="nav-items">
            <div className="nav-logo">
                {(this.state.color==="green") ? 
                (<img src={GreenApp} alt="my app" className="responsive-img"/>) : 
                (<img src={RedApp} alt="my app" className="responsive-img"/>) }
            </div>
            <div className="flex-space">
            </div>
                <div className="nav-links">
                {(this.state.color==="green") ? 
                (links.greenLinks): (links.redLinks)}
            </div>
            <div className="user-image">
              <img src={UserPic} 
              alt="User Face" className="responsive-imgs" /> 
            </div>
        </nav>
    </header>
        );
    }
}

export default Navbar;