import { IS_LOADING } from "./actionTypes";

export default function(isLoading) {
	return async function(dispatch) {
		return dispatch({ type: IS_LOADING, payload: isLoading });
	};
}
