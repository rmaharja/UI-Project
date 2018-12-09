import React from "react";
import "./Footer.css";
import Screw from "../../../Assets/Screw.svg";

const Footer = (props) => (
    <div className="left-footer">
            <footer>
                <img src={Screw} alt="Screw Pic" />
                Fixed to the bottom
                <img src={Screw} alt="Screw Pic" />
            </footer>
    </div>
)

export default Footer;