import React from "react";
import c from "./NewMessage.module.css";

const NewMessage = (props) => {
	const messageElement = React.createRef();

	const addMessage = () => {
		props.store.addMessage();
	};

	const onMessageChange = () => {
		let text = messageElement.current.value;
		props.store.updateMessageText(text);
	};

	return (
		<div className={c.newMessage}>
			<textarea
				value={props.store.state.dialogsPage.newMessageText}
				onChange={onMessageChange}
				ref={messageElement}
				className={c.text}
				name="message"
				id=""
				cols="30"
				rows="4"
				placeholder="Message"
			/>
			<button onClick={addMessage} className={c.button}>
				Send
			</button>
		</div>
	);
};

export default NewMessage;
