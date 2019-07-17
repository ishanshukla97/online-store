import { SET_ERROR } from "./actionTypes";

export const setError = function(error) {
	return async function(dispatch) {
		return dispatch({ type: SET_ERROR, payload: error });
	};
};
