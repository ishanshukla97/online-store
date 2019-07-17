import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Desk from "./components/Desk";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Loading />
				<Error />
				<Cart />
				<Header />

				<Route path="/" component={Desk} />
			</div>
		</BrowserRouter>
	);
}

export default App;
