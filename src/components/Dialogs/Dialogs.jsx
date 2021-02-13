import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import NewMessage from "./DialogItem/NewMessage/NewMessage";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name}></DialogItem>
	));

	const messagesElements = props.state.messages.map((m) => (
		<Message id={m.id} message={m.message} />
	));

	const myMessagesElements = props.state.myMessages.map((m) => (
		<Message id={m.id} message={m.message} />
	));

	return (
		<div className={c.wrapper}>
			<div className={c.dialogsItems}>{dialogsElements}</div>
			<div className={c.messagesItems}>{messagesElements}{myMessagesElements}</div>
			<NewMessage addMessage={props.addMessage} updateMessageText={props.updateMessageText}/>
		</div>
	);
};

export default Dialogs;
