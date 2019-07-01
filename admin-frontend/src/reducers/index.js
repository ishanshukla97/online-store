import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import navReducer from "./navReducer";
import productsReducer from "./productsReducer";

// keys inside of combineReducers object represent
// keys in the state object
export default combineReducers({
	auth: authReducer,
	form: formReducer,
	view: navReducer,
	products: productsReducer
});
