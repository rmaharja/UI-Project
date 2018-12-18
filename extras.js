import React from "react";
import "./Navbar.css";
import GreenApp from "../../Assets/GreenApp.png";
import UserPic from "../../Assets/face_circle.png";
import RedApp from "../../Assets/RedApp.png";

const styles = {
    greenBtn: {
        backgroundColor: "white",
        color: "#DE2D00",
        border: "0.5px solid #DE2D00"
    },
    redBtn: {
        backgroundColor: "#DE2D00",
        color: "white",
        border: "0.5px solid #DE2D00"
    }
}


const Navbar = (props) => (
    <header className="navbar">
    {console.log("Navbar Component Mounted...")}
        <nav className="nav-items">
            <div className="nav-logo">
                {(props.color === "green")
                    ? (<img src={GreenApp} alt="my app" className="responsive-img"/>)
                    : (<img src={RedApp} alt="my app" className="responsive-img"/>)}
            </div>
            <div className="flex-space"></div>
            <div className="nav-links">
                {(props.color === "green")
                    ? (
                        <ul>
                            <li>
                                <a href="/" id="green-btn" onClick={props.greenOnClick} style={null}>Green</a>
                            </li>
                            <li>
                                <a href="/" id="red-btn" onClick={props.redOnClick} style={null}>Red</a>
                            </li>
                        </ul>
                    )
                    : (
                        <ul>

                            <li>
                                <a href="/" id="green-btn" onClick={props.greenOnClick} style={styles.greenBtn}>Green</a>
                            </li>
                            <li>
                                <a href="/" id="red-btn" onClick={props.redOnClick} style={styles.redBtn}>Red</a>
                            </li>
                        </ul>
                    )
                }

            </div>
            <div className="user-image">
                <img src={UserPic} alt="User Face"/>
            </div>
        </nav>
    </header>
);

export default Navbar;