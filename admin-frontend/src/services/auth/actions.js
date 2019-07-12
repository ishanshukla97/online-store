import { FETCH_USER } from "./actionTypes";
import { login } from "../../graphqlFetch/query";

export const fetchUser = ({ username, password }, client) => {
	return async function(dispatch) {
		try {
			const res = await login({ username, password }, client);
			return dispatch({ type: FETCH_USER, payload: res.data.login });
		} catch (err) {
			throw err;
		}
	};
};
