import React from "react";
import { connect } from "react-redux";
import { withApollo } from "react-apollo";
import * as cartActions from "../../services/cart/actions";
import * as checkoutActions from "../../services/checkout/actions";
import { bindActionCreators } from "redux";
import CheckoutForm from "./CheckoutForm";
import "./index.scss";

const Cart = props => {
	const [checkoutView, setCheckoutView] = React.useState(false);

	let totalPrice = props.cart.items.reduce(
		(total, curr) => total + curr.price * curr.qty,
		0
	);
	totalPrice = totalPrice.toFixed(2);

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
					onSubmit={values =>
						props.checkoutActions.placeOrder(values, props.client)
					}
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
							onClick={() =>
								props.cartActions.removeCartItem(item)
							}
						>
							<i className="material-icons">close</i>
						</div>
						<div className="cart-item-heading">{item.title}</div>
						<div className="cart-item-details">
							Qty: {item.qty} X ₹{item.price}
						</div>
						<div className="cart-item-price">
							{" "}
							₹ {(item.qty * item.price).toFixed(2)}
						</div>
					</div>
				);
			});
		} else {
			return (
				<div className="empty-cart-container">
					<i className="material-icons large">add_shopping_cart</i>
					<h3 style={{ fontSize: "15pt" }}>Add something to Cart!</h3>
				</div>
			);
		}
	};

	if (props.cart.cartView) {
		return (
			<React.Fragment>
				<div className="cart">
					<div
						onClick={() => props.cartActions.toggleCart()}
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

const mapDispatchToProps = dispatch => {
	return {
		cartActions: bindActionCreators(cartActions, dispatch),
		checkoutActions: bindActionCreators(checkoutActions, dispatch)
	};
};

export default withApollo(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Cart)
);
