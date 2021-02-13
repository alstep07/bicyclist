import React from "react";
import { NavLink } from "react-router-dom";
import c from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={c.dialog}>
            <NavLink className={c.dialogLink} to={path}>{`${props.name}`}</NavLink>
        </div>
    )
}

export default DialogItem;
