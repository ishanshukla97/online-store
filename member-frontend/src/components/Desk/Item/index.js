import React from "react";
import "./index.css";
import { connect } from "react-redux";
import * as actions from "../../../services/cart/actions";

const Item = props => {
	return (
		<div className="col m4" key={props._id}>
			<div className="card medium">
				<div className="card-image">
					<img src={props.img} />
					<span className="card-title">{props.title}</span>
				</div>
				<div className="card-content">
					<p>{props.description}</p>
				</div>
				<div className="card-action">
					<a href="#!" className="price-text">
						₹ {props.price}
					</a>
					<a
						href="#!"
						className="add-btn btn-floating red waves-effect"
						onClick={() => {
							props.addCartItem(props.item);
						}}
					>
						<i className="material-icons">add</i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default connect(
	null,
	actions
)(Item);
