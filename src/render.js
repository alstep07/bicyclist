import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addMessage } from "./redux/state";
import {updateMessageText} from "./redux/state";

export const renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addMessage={addMessage} updateMessageText={updateMessageText}/>
		</BrowserRouter>,
		document.getElementById("root")
	);
}
