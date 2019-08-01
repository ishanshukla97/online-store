import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/login" component={Login} />
						{!this.props.auth ? (
							<Redirect to="/login" />
						) : (
							<Redirect to="/dashboard" />
						)}
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
