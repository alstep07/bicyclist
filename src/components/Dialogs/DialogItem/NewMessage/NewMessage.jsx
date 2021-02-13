import React from "react";
import c from "./NewMessage.module.css";

const NewMessage = (props) => {
    const messageElement = React.createRef();

    const addMessage = () => {
		let message = messageElement.current.value;
		props.addMessage(message);
		messageElement.current.value = "";
	};

	const onMessageChange = () => {
		props.addMessageText(messageElement.current.value);
	}

    return (
        <div className={c.newMessage}>
            <textarea
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
    )
}

export default NewMessage;
