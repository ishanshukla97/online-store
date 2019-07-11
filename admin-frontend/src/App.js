import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const Header = () => (
	<div style={{ width: "100%" }}>
		<h2>Header</h2>
	</div>
);

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/login" component={Login} />
						{!this.props.auth && (
								<Redirect from="/dashboard" to="/login" />
							) && <Redirect from="/" to="/login" />}
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(
	mapStateToProps,
	null
)(App);
