import { MAIN_VIEW } from "./actionsTypes";

export const toggleView = state => {
	return function(dispatch) {
		return dispatch({ type: MAIN_VIEW, payload: state });
	};
};
