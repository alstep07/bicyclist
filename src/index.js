import "./index.css";
import store from "./redux/state.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


export const renderEntireTree = (store) => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store} />
		</BrowserRouter>,
		document.getElementById("root")
	);
};

renderEntireTree(store);

store.subscribe(renderEntireTree);
