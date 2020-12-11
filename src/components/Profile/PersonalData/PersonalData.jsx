import React from "react";
import ava from "../../../img/ava.jpg";
import c from "./PersonalData.module.css";

const PersonalData = () => {
    return (
    <div className={c.ava}>
        <img className={c.img} src={ava} alt="ava" /> 
        <h2 className={c.nickname}>Alexandr Stepanenko</h2>
        <p>Bike: GT Avalanche sport 2014</p>
    </div>
    )
}

export default PersonalData;