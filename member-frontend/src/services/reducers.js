import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deskReducer from "./desk/reducer";

export default combineReducers({
	desk: deskReducer,
	form: formReducer
});
