import React from "react";
import c from "./NewMessage.module.css";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../../../redux/state";

const NewMessage = (props) => {
	const addMessage = () => {
		let action = addMessageActionCreator();
		props.dispatch(action);
	};

	const onMessageChange = ({target}) => {
		let action = updateMessageTextActionCreator(target.value);
		props.dispatch(action);
	};

	return (
		<div className={c.newMessage}>
			<textarea
				value={props.newMessageText}
				onChange={onMessageChange}
				className={c.text}
				name="message"
				placeholder="Message"
			/>
			<button onClick={addMessage} className={c.button}>
				Send
			</button>
		</div>
	);
};

export default NewMessage;
