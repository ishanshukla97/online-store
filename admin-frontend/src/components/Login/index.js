import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
	render() {
		return (
			<div
				style={{
					width: "500px",
					marginLeft: "30%"
				}}
			>
				<LoginForm />
			</div>
		);
	}
}

export default Login;
