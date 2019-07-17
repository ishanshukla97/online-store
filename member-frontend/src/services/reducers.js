import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deskReducer from "./desk/reducer";
import filterReducer from "./filter/reducer";
import cartReducer from "./cart/reducer";
import errorReducer from "./error/reducer";
import loadingReducer from "./loading/reducer";
import checkoutReducer from "./checkout/reducer";

export default combineReducers({
	desk: deskReducer,
	filterDesk: filterReducer,
	cart: cartReducer,
	form: formReducer,
	error: errorReducer,
	loading: loadingReducer,
	checkout: checkoutReducer
});
