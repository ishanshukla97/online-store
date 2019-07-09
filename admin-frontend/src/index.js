import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle";
import "materialize-css/dist/css/materialize.min.css";

import "./index.css";
import App from "./App";

const persistedState = loadState();
const store = createStore(
	reducers,
	persistedState,
	applyMiddleware(reduxThunk)
);

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
