import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import viewReducer from "./view/reducer";
import authReducer from "./auth/reducer";
import productsReducer from "./products/reducer";

// keys inside of combineReducers object represent
// keys in the state object
export default combineReducers({
	auth: authReducer,
	form: formReducer,
	view: viewReducer,
	products: productsReducer
});
