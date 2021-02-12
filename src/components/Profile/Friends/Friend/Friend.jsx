import React from "react";
import c from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={c.friend}>
            <img src="#" alt="ava" className={c.ava}/>
            <p className={c.name}>
                {props.name}
            </p>
        </div>
    )
}

export default Friend;
