import React from "react";
import c from "./PersonalData.module.css";
import img from '../../../img/ava.jpg';

const PersonalData = (props) => {
    return (
    <div className={c.ava}>
        <img className={c.img} src={img} alt="ava" />
        <h2 className={c.nickname}>{props.state.firstName} {props.state.lastName}</h2>
        <p>{props.state.bikeName}</p>
    </div>
    )
}

export default PersonalData;
