import {
	FETCH_USER,
	MAIN_VIEW,
	FETCH_PRODUCTS,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	CREATE_PRODUCT
} from "./types";
import login from "../graphqlFetch/login";
import { getProducts, update, remove, create } from "../graphqlFetch/products";

export const fetchUser = ({ username, password }) => {
	return async function(dispatch) {
		try {
			const res = await login({ username, password });
			return dispatch({ type: FETCH_USER, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const toggleView = state => {
	return function(dispatch) {
		return dispatch({ type: MAIN_VIEW, payload: state });
	};
};

export const fetchProducts = auth => {
	return async function(dispatch) {
		try {
			const res = await getProducts(auth);
			return dispatch({ type: FETCH_PRODUCTS, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const createProduct = (product, auth) => {
	return async function(dispatch) {
		try {
			const res = await create(product, auth);
			return dispatch({ type: CREATE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const updateProduct = (product, auth) => {
	return async function(dispatch) {
		try {
			const res = await update(product, auth);
			return dispatch({ type: UPDATE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};

export const removeProduct = ({ _id }, auth) => {
	return async function(dispatch) {
		try {
			const res = await remove({ _id }, auth);
			return dispatch({ type: DELETE_PRODUCT, payload: res });
		} catch (err) {
			throw err;
		}
	};
};
