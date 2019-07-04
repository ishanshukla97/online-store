import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import Desk from "./components/Desk";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Route path="/" component={Desk} />
			</div>
		</BrowserRouter>
	);
}

export default App;
