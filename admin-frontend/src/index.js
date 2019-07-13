import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./services/reducers";
import reduxThunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle";
import "materialize-css/dist/css/materialize.min.css";
import { HTTP_URL, WS_URL } from "./utils/constants";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
// Remove the apollo-boost import and change to this:
import ApolloClient from "apollo-client";
// Setup the network "links"
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

const persistedState = loadState();
console.log(persistedState);
const wsLink = new WebSocketLink({
	uri: WS_URL,
	options: {
		reconnect: true,
		connectionParams: {
			authToken: persistedState
		}
	}
});
const httpLink = new HttpLink({
	uri: HTTP_URL
});

const link = split(
	// split based on operation type
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === "OperationDefinition" && operation === "subscription";
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

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
