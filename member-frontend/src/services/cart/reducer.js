import { ADD_ITEM, REMOVE_ITEM, TOGGLE_CART } from "./actionTypes";

const initState = {
	items: [],
	cartView: false
};

export default function(state = initState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, items: action.payload };
		case REMOVE_ITEM:
			return { ...state, items: action.payload };
		case TOGGLE_CART:
			return { ...state, cartView: action.payload };
		default:
			return state;
	}
}
