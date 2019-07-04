import axios from "axios";
import { FETCH_PRODUCTS } from "./actionType";

export const fetchProducts = () => {
	return async function(dispatch) {
		console.log("fetch product");
		try {
			const res = await axios({
				url: "http://localhost:5000/member/graphql",
				method: "post",
				data: {
					query: `
				query {
					products {
						_id
						title
						description
						price
						img
					}
				}	
				`
				}
			});
			return dispatch({
				type: FETCH_PRODUCTS,
				payload: res.data.data.products
			});
		} catch (err) {
			throw err;
		}
	};
};
