import React from 'react';
import "./Main.css";
import Card from "../Card/Card.js";
import Footer from "../Footer/Footer.js";
import Columns from "../Columns/Columns.js";

const Main = (props) => (
            <div className="container">
                <div className="left-container">
                    <div className="left-container-content">
                         <div className="left-container-cards">
                         <Card
                         color={props.color}/>
                         <Card
                         color={props.color}/>
                         <Card
                         color={props.color}/>
        
                         <Footer />
                         </div>
                        <div className="left-container-flex">
                        </div>
                    </div>

                </div>

                <div className="right-container">
                    <div className="right-content">
                        <Columns
                        color={props.color} />
                    </div>
                </div>
            </div>//end of container
        );


export default Main;
