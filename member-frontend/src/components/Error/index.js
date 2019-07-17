import React from "react";
import "./index.css";
import * as actions from "../../services/error/actions";
import { connect } from "react-redux";

const Error = props => {
	const noErr = {
		isError: false,
		message: ""
	};
	if (props.error.isError) {
		return (
			<div className="error-container">
				<div className="error-box">
					<div className="error-header">
						<div className="error-title">
							An error occured
							<div
								className="close-btn"
								onClick={() => props.setError(noErr)}
							>
								<i className="material-icons">close</i>
							</div>
						</div>
					</div>
					<div className="error-content">{props.error.message}</div>
				</div>
			</div>
		);
	}
	return <div />;
};

const mapStateToProps = ({ error }) => {
	return { error };
};

export default connect(
	mapStateToProps,
	actions
)(Error);
