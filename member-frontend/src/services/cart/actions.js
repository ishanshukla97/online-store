import { ADD_ITEM, REMOVE_ITEM, TOGGLE_CART } from "./actionTypes";
import { addItem, removeItem } from "../../utils/cart";
import stringifyObject from "stringify-object";
import axios from "axios";

//TODO: implement add remove cart items

export const addCartItem = item => {
	return function(dispatch, getState) {
		const { cart } = getState();

		dispatch({ type: ADD_ITEM, payload: addItem(cart.items, item) });
	};
};

export const removeCartItem = item => {
	return function(dispatch, getState) {
		const { cart } = getState();

		dispatch({ type: REMOVE_ITEM, payload: removeItem(cart.items, item) });
	};
};

export const toggleCart = () => {
	return function(dispatch, getState) {
		const {
			cart: { cartView }
		} = getState();

		const newState = !cartView;

		dispatch({ type: TOGGLE_CART, payload: newState });
	};
};

export const placeOrder = vals => {
	const { name, contact, locality, address } = vals;

	return async function(dispatch, getState) {
		const { cart } = getState();
		const items = cart.items.map(item => {
			return {
				_id: item._id,
				quantity: item.qty
			};
		});

		const res = await axios({
			url: "http://localhost:5000/member/graphql",
			method: "post",
			data: {
				query: `
				mutation{
					createGuestOrder(guestOrderInput: {
					  contact: "${contact}",
					  address: "${locality + " " + address}",
					  name: "${name}",
					  products: ${stringifyObject(items, { singleQuotes: false })}
					})
				  }	
			`
			}
		});
		console.log(res);
	};
};
