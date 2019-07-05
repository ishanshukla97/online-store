import React from "react";
import { connect } from "react-redux";
import * as actions from "../../services/cart/actions";
import "./index.css";

const Cart = props => {
	const renderItem = () => {
		if (props.cart.items.length > 0) {
			return props.cart.items.map(item => {
				return (
					<div key={item._id} className="cart-item">
						<hr className="hr-margin" />
						<div
							className="remove-item"
							onClick={() => props.removeCartItem(item)}
						>
							<i className="material-icons">close</i>
						</div>
						<div className="cart-item-heading">{item.title}</div>
						<div className="cart-item-details">
							Qty: {item.qty} X ₹{item.price}
						</div>
						<div className="cart-item-price">
							{" "}
							₹ {item.qty * item.price}
						</div>
					</div>
				);
			});
		} else {
			return <div>Oops your cart looks empty!</div>;
		}
	};
	if (props.cart.cartView) {
		return (
			<div className="cart">
				<div onClick={() => props.toggleCart()} className="cross-btn">
					<i className="material-icons">close</i>
				</div>
				{renderItem()}
			</div>
		);
	}
	return <div />;
};

const mapStateToProps = ({ cart }) => {
	return { cart };
};

export default connect(
	mapStateToProps,
	actions
)(Cart);
