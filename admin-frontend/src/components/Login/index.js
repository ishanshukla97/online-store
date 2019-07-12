import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { withApollo } from "react-apollo";

class Login extends Component {
	render() {
		return (
			<div
				style={{
					width: "500px",
					marginLeft: "30%"
				}}
			>
				<LoginForm client={this.props.client} />
			</div>
		);
	}
}

export default withApollo(Login);
