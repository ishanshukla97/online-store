import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deskReducer from "./desk/reducer";
import filterReducer from "./filter/reducer";

export default combineReducers({
	desk: deskReducer,
	filterDesk: filterReducer,
	form: formReducer
});
