import { SET_FILTER } from "./actionTypes";

export const setFilter = filter => {
	return async function(dispatch, getState) {
		const state = getState();
		let filterDesk = [];

		if (filter) {
			filterDesk = state.desk.filter(
				product => product.category === filter
			);
		} else filterDesk = state.desk;

		return dispatch({ type: SET_FILTER, payload: filterDesk });
	};
};
