import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name}></DialogItem>
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message id={m.id} message={m.message} />
	));
	let myMessagesElements = props.state.myMessages.map((m) => (
		<Message id={m.id} message={m.message} />
	));
	let messageElement = React.createRef();
	let addMessage = () => {
		let message = messageElement.current.value;
		props.addMessage(message);
	};

	return (
		<div className={c.wrapper}>
			<div className={c.dialogsItems}>{dialogsElements}</div>
			<div className={c.messagesItems}>{messagesElements}{myMessagesElements}</div>
			<div className={c.newMessage}>
				<textarea
					ref={messageElement}
					className={c.text}
					name="message"
					id=""
					cols="30"
					rows="4"
                    placeholder="Message"
				></textarea>
				<button onClick={addMessage} className={c.button}>
					Send
				</button>
			</div>
		</div>
	);
};

export default Dialogs;
