import { SET_FILTER } from "./actionTypes";

export default function(state = "", action) {
	switch (action.type) {
		case SET_FILTER:
			return action.payload;
		default:
			return state;
	}
}
