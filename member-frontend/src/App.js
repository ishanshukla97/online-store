import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import Desk from "./components/Desk";
import Cart from "./components/Cart";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Cart />
				<Header />

				<Route path="/" component={Desk} />
			</div>
		</BrowserRouter>
	);
}

export default App;
