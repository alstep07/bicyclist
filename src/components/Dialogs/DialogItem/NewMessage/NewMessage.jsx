import React from "react";
import c from "./NewMessage.module.css";

const NewMessage = (props) => {
	const messageElement = React.createRef();

	const addMessage = () => {
		props.addMessage();
	};

	const onMessageChange = () => {
		let text = messageElement.current.value;
		props.updateMessageText(text);
	};

	return (
		<div className={c.newMessage}>
			<textarea
                value={props.dialogsPage.newMessageText}
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
