import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage.js";
import App from "./App";
import reducers from "./services/reducers";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-social/css/materialize.min.css";
import throttle from "lodash/throttle";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./utils/setupApollo";
import "./sass/_main.scss";

const persistedState = loadState();

const client = apolloClient(persistedState);

const store = createStore(
	reducers,
	persistedState,
	applyMiddleware(reduxThunk)
);

store.subscribe(
	throttle(() => {
		saveState({
			cart: store.getState().cart
		});
	}, 1000)
);

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
