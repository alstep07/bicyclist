import React from "react";
import c from "./Friends.module.css";
import Friend from "./Friend/Friend"

const Friends = (props) => {
    let friendElements = props.state.map(f => {
        return <Friend name={f.name}/>
    });
    return (
        <div className={c.friends}>
            <h2 className={c.header}>Friends</h2>
            {friendElements}
        </div>
    )
}

export default Friends;
