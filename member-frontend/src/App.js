import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Desk from "./components/Desk";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Loading />
				<Error />
				<Cart />
				<NavBar />

				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Desk} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
