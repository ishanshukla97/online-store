import { createGuestOrder } from "../../graphql/mutation";
import { PROCEED_CHECKOUT } from "./actionTypes";
import { IS_LOADING } from "../loading/actionTypes";
import { SET_ERROR } from "../error/actionTypes";

export const placeOrder = (vals, client) => {
	const { name, contact, locality, address } = vals;
	return async function(dispatch, getState) {
		const { cart } = getState();
		const items = cart.items.map(item => {
			return {
				_id: item._id,
				name: item.title,
				quantity: item.qty
			};
		});

		const guestOrderInput = {
			name,
			contact,
			address: address + " " + locality,
			products: items
		};

		dispatch({ type: IS_LOADING, payload: true });

		const res = await createGuestOrder(guestOrderInput, client);

		dispatch({ type: IS_LOADING, payload: false });

		if (res === "error") {
			const error = { isError: true, message: "Error" };
			return dispatch({ type: SET_ERROR, payload: error });
		}

		return dispatch({ type: PROCEED_CHECKOUT, payload: res });
	};
};
