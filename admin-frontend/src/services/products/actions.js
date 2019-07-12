import Product from "../../graphqlFetch/mutation";
import { getProducts } from "../../graphqlFetch/query/index";
import {
	FETCH_PRODUCTS,
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT
} from "./actionTypes";

export const fetchProducts = (auth, client) => {
	return async function(dispatch) {
		try {
			const res = await getProducts(auth, client);
			return dispatch({
				type: FETCH_PRODUCTS,
				payload: res
			});
		} catch (err) {
			throw err;
		}
	};
};

export const createProduct = (product, auth, client) => {
	return async function(dispatch) {
		try {
			const res = await Product.create(product, auth, client);
			return dispatch({ type: CREATE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const updateProduct = (product, auth, client) => {
	console.log(product, auth, client);
	return async function(dispatch) {
		try {
			const res = await Product.update(product, auth, client);
			return dispatch({ type: UPDATE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const removeProduct = ({ _id }, auth, client) => {
	return async function(dispatch) {
		try {
			const res = await Product.remove({ _id }, auth, client);
			return dispatch({ type: DELETE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};
