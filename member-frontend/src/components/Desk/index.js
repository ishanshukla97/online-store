import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import Item from "./Item";
import * as actions from "../../services/desk/actions";
import "./index.css";

class Desk extends Component {
	async componentDidMount() {
		await this.props.fetchProducts();
	}

	render() {
		return (
			<div className="row">
				<div
					className="col s12 m12"
					style={{ padding: 0, marginBottom: "50pt" }}
				>
					<div className="desk-banner">
						<h2 style={{ textAlign: "center" }}>
							Browse from our Wide Range of Products
						</h2>
					</div>
				</div>
				<div className="col s12 m3" style={{ padding: 0 }}>
					<Filter />
				</div>
				<div className="col s12 m9">
					{this.props.filterDesk
						? this.props.filterDesk.map(product => {
								return (
									<Item
										key={product._id}
										{...product}
										item={product}
									/>
								);
						  })
						: "Loading..."}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ filterDesk }) {
	return { filterDesk };
}

export default connect(
	mapStateToProps,
	actions
)(Desk);
