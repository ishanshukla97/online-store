import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import Item from "./Item";
import * as actions from "../../services/desk/actions";

class Desk extends Component {
	async componentDidMount() {
		await this.props.fetchProducts();
		console.log(this.props.desk);
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m2">
					<Filter />
				</div>
				<div className="col s12 m10">
					{this.props.desk
						? this.props.desk.map(product => {
								return <Item key={product._id} {...product} />;
						  })
						: "Loading..."}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ desk }) {
	return { desk };
}

export default connect(
	mapStateToProps,
	actions
)(Desk);
