import { FETCH_PRODUCTS } from "./actionType";

const initProducts = [{}];

export default function(state = initProducts, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return action.payload || false;
		default:
			return state;
	}
}
