import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import NewMessage from "./DialogItem/NewMessage/NewMessage";

const Dialogs = (props) => {
	const dialogsElements = props.dialogsPage.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name}></DialogItem>
	));

	const messagesElements = props.dialogsPage.messages.map((m) => (
		<Message id={m.id} message={m.message} />
	));

	const myMessagesElements = props.dialogsPage.myMessages.map((m) => (
		<Message id={m.id} message={m.message} />
	));

	return (
		<div className={c.wrapper}>
			<div className={c.dialogsItems}>{dialogsElements}</div>
			<div className={c.messagesItems}>
				{messagesElements}
				{myMessagesElements}
			</div>
			<NewMessage
				newMessageText = {props.dialogsPage.newMessageText}
				dispatch = {props.dispatch}
			/>
		</div>
	);
};

export default Dialogs;
