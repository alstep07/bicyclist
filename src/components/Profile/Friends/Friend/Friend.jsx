import React from "react";
import c from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={c.name}>
            {props.name}
        </div>
    )
}

export default Friend;
