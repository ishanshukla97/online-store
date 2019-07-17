import { SET_ERROR } from "./actionTypes";

const initState = {
	isError: false,
	message: ""
};

export default function(state = initState, action) {
	switch (action.type) {
		case SET_ERROR:
			return action.payload;
		default:
			return state;
	}
}
