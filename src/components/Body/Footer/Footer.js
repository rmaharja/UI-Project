import React from "react";
import "./Footer.css";
import Screw from "../../../Assets/Screw.svg";

const Footer = () => (
    <div className="left-footer">
        <div className="left-footer-flex-1"></div>

        <div className="left-footer-flex-2">

            <div id="flexfoot" className="flex-2-footer">
                <div className="flex-2-image">
                    <img src={Screw} alt="Screw Pic"/>
                </div>
                <footer
                    style={{
                    borderBottom: "6px solid white"
                }}>
                    Fixed to the bottom
                </footer>
                <div className="flex-2-image2">
                    <img src={Screw} alt="Screw Pic"/>
                </div>
            </div>

        </div>

        <div className="left-footer-flex-3"></div>

    </div>
)

export default Footer;