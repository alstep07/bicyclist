import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
	{ id: 1, name: "Sasha" },
	{ id: 2, name: "Dima" },
	{ id: 3, name: "Oleg" },
	{ id: 4, name: "Misha" },
	{ id: 5, name: "Julia" },
];

let messages = [
	{ id: 1, message: "Hello" },
	{ id: 2, message: "How are you?" },
	{ id: 3, message: "Thank you!" },
	{ id: 4, message: "Nice bike!" },
	{ id: 5, message: "Good job)" },
];

let posts = [
	{ id: 1, message: "This is my post", likeCounter: 36 },
	{ id: 2, message: "This is my post", likeCounter: 55 },
	{ id: 3, message: "This is my post", likeCounter: 26 },
	{ id: 4, message: "This is my post", likeCounter: 11 },
	{ id: 5, message: "This is my post", likeCounter: 45 },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
