import { FETCH_PRODUCTS } from "./actionTypes";

export default function(state = [{}], actions) {
	switch (actions.type) {
		case FETCH_PRODUCTS:
			if (actions.payload.data.products) {
				actions.payload.data.products.forEach(obj => {
					delete obj.__typename;
				});
			}

			return actions.payload.data.products || false;
		default:
			return state;
	}
}
