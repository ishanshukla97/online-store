import { MAIN_VIEW } from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case MAIN_VIEW:
			return action.payload;
		default:
			return state;
	}
}
