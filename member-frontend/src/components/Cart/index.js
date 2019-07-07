import React from "react";
import { connect } from "react-redux";
import * as actions from "../../services/cart/actions";
import CheckoutForm from "./CheckoutForm";
import "./index.css";

const Cart = props => {
	const [checkoutView, setCheckoutView] = React.useState(false);
	let totalPrice = props.cart.items.reduce(
		(total, curr) => total + curr.price * curr.qty,
		0
	);
	totalPrice += totalPrice * 0.05;

	const proceedCheckout = () => {
		if (props.cart.items.length > 0) {
			setCheckoutView(true);
		}
	};

	const renderCheckoutView = () => {
		if (checkoutView) {
			return (
				<CheckoutForm
					total={totalPrice}
					onCancel={() => setCheckoutView(false)}
				/>
			);
		} else return;
	};

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
			<React.Fragment>
				<div className="cart">
					<div
						onClick={() => props.toggleCart()}
						className="cross-btn"
					>
						<i className="material-icons">close</i>
					</div>
					<div className="cart-container scrollbar">
						{renderItem()}
					</div>
					<div className="cart-footer">
						<div className="cart-footer-sub">TOTAL</div>
						<div className="cart-footer-sub-price">
							₹ {totalPrice}
						</div>
						<div
							className="cart-checkout-btn"
							onClick={() => proceedCheckout()}
						>
							CHECKOUT
						</div>
					</div>
				</div>
				{renderCheckoutView()}
			</React.Fragment>
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
