import React, { Component } from "react";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import Products from "./Products";
import Orders from "./Orders";
import Reviews from "./Reviews";

class Dashboard extends Component {
	renderView() {
		switch (this.props.view) {
			case "Products":
				return <Products />;
			case "Orders":
				return <Orders />;
			case "Reviews":
				return <Reviews />;
			default:
				return <Products />;
		}
	}
	render() {
		return (
			<div className="row">
				<SideBar />
				{this.renderView()}
			</div>
		);
	}
}

function mapStateToProps({ view, auth }) {
	return { view, auth };
}

export default connect(
	mapStateToProps,
	null
)(Dashboard);
