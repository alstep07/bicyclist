import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem id={d.id} name={d.name}></DialogItem>);

    let messagesElements = props.state.messages
        .map( m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={c.wrapper}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
