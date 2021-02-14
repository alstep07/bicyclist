import React from "react";
import c from "./NewMessage.module.css";

const NewMessage = (props) => {
	const messageElement = React.createRef();

	const addMessage = () => {
		let action = {type: "ADD-MESSAGE"}
		props.dispatch(action);
	};

	const onMessageChange = () => {
		let action = {
			type: "UPDATE-MESSAGE-TEXT",
			text: messageElement.current.value
		}
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
