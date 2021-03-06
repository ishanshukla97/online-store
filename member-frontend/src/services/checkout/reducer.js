import { PROCEED_CHECKOUT } from "./actionTypes";

export default function(state = {}, action) {
	switch (action.type) {
		case PROCEED_CHECKOUT:
			return action.payload || false;
		default:
			return state;
	}
}
