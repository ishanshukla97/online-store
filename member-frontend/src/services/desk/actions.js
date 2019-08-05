import { FETCH_PRODUCTS } from "./actionTypes";
import { fetchProducts } from "../../graphql/query";
import { IS_LOADING } from "../loading/actionTypes";
import { SET_ERROR } from "../error/actionTypes";

export const getProducts = client => {
	return async function(dispatch) {
		dispatch({ type: IS_LOADING, payload: true });

		const res = await fetchProducts({}, client);

		dispatch({ type: IS_LOADING, payload: false });

		if (res === "error") {
			const error = { isError: true, message: "Error" };
			return dispatch({ type: SET_ERROR, payload: error });
		}

		return dispatch({ type: FETCH_PRODUCTS, payload: res.data.products });
	};
};
