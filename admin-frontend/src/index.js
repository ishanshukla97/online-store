import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./services/reducers";
import reduxThunk from "redux-thunk";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle";
import "materialize-css/dist/css/materialize.min.css";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
	uri: "http://localhost:5000/admin/graphql"
});

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
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
