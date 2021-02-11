import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import Statistic from "./components/Statistic/Statistic";
import Bikes from "./components/Bikes/Bikes";
import Groups from "./components/Groups/Groups";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => <Profile state={props.state.profilePage} />}
					/>
					<Route
						path="/dialogs"
						render={() => (
							<Dialogs
								state={props.state.dialogsPage}
							/>
						)}
					/>
					<Route path="/statistic" component={Statistic} />
					<Route path="/groups" component={Groups} />
					<Route path="/bikes" component={Bikes} />
					<Route path="/photo" component={Photo} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
