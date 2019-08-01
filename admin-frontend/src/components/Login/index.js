import React from "react";
import LoginForm from "./LoginForm";
import { withApollo } from "react-apollo";

const Login = props => {
	return <LoginForm client={props.client} />;
};

export default withApollo(Login);
