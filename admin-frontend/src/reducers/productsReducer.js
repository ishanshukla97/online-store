import { FETCH_PRODUCTS } from "../actions/types";

export default function(state = [{}], actions) {
	switch (actions.type) {
		case FETCH_PRODUCTS:
			return actions.payload.data.data.products || false;
		default:
			return state;
	}
}
