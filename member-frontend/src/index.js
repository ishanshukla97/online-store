import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage.js"
import App from "./App";
import reducers from "./services/reducers";
import "materialize-css/dist/css/materialize.min.css";
import throttle from "lodash/throttle"

const persistedState = loadState()
console.log(persistedState)
const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk));

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, 1000)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
