import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import Item from "./Item";
import * as actions from "../../services/desk/actions";
import { withApollo } from "react-apollo";
import "./index.scss";

class Desk extends Component {
	async componentDidMount() {
		await this.props.getProducts(this.props.client);
	}

	render() {
		return (
			<div className="row">
				<div
					className="col s12 m12"
					style={{ padding: 0, marginBottom: "5rem" }}
				>
					<div className="desk-banner">
						<h1 className="desk-banner__heading">
							Browse from our Wide Range of Products
						</h1>
					</div>
				</div>
				<div className="col s12 m3" style={{ padding: 0 }}>
					<Filter />
				</div>
				<div className="col s12 m9">
					{this.props.filterDesk ? (
						this.props.filterDesk.map(product => {
							return (
								<Item
									key={product._id}
									{...product}
									item={product}
								/>
							);
						})
					) : (
						<div>Loading</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ filterDesk }) {
	return { filterDesk };
}

export default withApollo(
	connect(
		mapStateToProps,
		actions
	)(Desk)
);
