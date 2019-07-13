import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./services/reducers";
import reduxThunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle";
import "materialize-css/dist/css/materialize.min.css";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./utils/setupApollo";

const persistedState = loadState();
const client = apolloClient(persistedState);

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
