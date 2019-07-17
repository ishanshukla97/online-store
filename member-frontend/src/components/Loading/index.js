import { connect } from "react-redux";
import React from "react";
import "./index.css";

const Loading = props => {
	if (props.loading) {
		return (
			<div className="loader-container">
				<div className="loader-box">
					<div className="preloader-wrapper big active">
						<div className="spinner-layer spinner-blue-only">
							<div className="circle-clipper left">
								<div className="circle" />
							</div>
							<div className="gap-patch">
								<div className="circle" />
							</div>
							<div className="circle-clipper right">
								<div className="circle" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <div />;
};

const mapStateToProps = ({ loading }) => {
	return { loading };
};

export default connect(mapStateToProps)(Loading);
