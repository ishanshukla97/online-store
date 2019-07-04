import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import Item from "./Item";
import * as actions from "../../services/desk/actions";

class Desk extends Component {
	async componentDidMount() {
		await this.props.fetchProducts();
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m2">
					<Filter />
				</div>
				<div className="col s12 m10">
					{this.props.filterDesk
						? this.props.filterDesk.map(product => {
								return <Item key={product._id} {...product} />;
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
