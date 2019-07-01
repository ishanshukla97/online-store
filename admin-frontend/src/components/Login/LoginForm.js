import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import LoginField from "./LoginField";
import validatePassword from "../../utils/validatePassword";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
	renderInvalidLogin() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <div className="red-text">Invalid Credentials</div>;
			default:
				return <Redirect to="/dashboard" />;
		}
	}

	render() {
		return (
			<div className="container">
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.props.fetchUser(values)
					)}
				>
					<Field
						type="text"
						name="username"
						label="Username"
						component={LoginField}
					/>
					<Field
						type="password"
						name="password"
						label="Password"
						component={LoginField}
					/>
					<button type="submit" className="teal btn-flat">
						Submit
					</button>
					{this.renderInvalidLogin()}
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.username) {
		errors.username = "You must provide username";
	}
	errors.password = validatePassword(values.password);
	return errors;
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default reduxForm({
	validate,
	form: "loginForm"
})(
	connect(
		mapStateToProps,
		actions
	)(LoginForm)
);
