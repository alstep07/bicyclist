import React from "react";
import c from "./NewMessage.module.css";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../../../redux/state";

const NewMessage = (props) => {
	const messageElement = React.createRef();

	const addMessage = () => {
		let action = addMessageActionCreator();
		props.dispatch(action);
	};

	const onMessageChange = () => {
		let action = updateMessageTextActionCreator(messageElement.current.value);
		props.dispatch(action);
	};

	return (
		<div className={c.newMessage}>
			<textarea
				value={props.newMessageText}
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
