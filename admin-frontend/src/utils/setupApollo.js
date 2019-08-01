import ApolloClient from "apollo-client";
// Setup the network "links"
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { HTTP_URL, WS_URL } from "../utils/constants";
import { loadState } from "../utils/localStorage";

export default function(persistedState = undefined) {
	const wsLink = new WebSocketLink({
		uri: WS_URL,
		options: {
			reconnect: true,
			connectionParams: {
				authToken:
					persistedState && persistedState.auth
						? persistedState.auth.token
						: undefined
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
			return (
				kind === "OperationDefinition" && operation === "subscription"
			);
		},
		wsLink,
		httpLink
	);

	const authLink = setContext(async (_, { headers }) => {
		let token;
		if (persistedState && persistedState.auth) {
			token = persistedState.auth.token || undefined;
			return {
				headers: {
					...headers,
					authorization: `Bearer: ${token ? token : undefined}`
				}
			};
		}
		const state = await loadState();
		if (state.auth) {
			token = state.auth.token;
		}

		return {
			headers: {
				...headers,
				authorization: `Bearer: ${token ? token : undefined}`
			}
		};
	});

	const client = new ApolloClient({
		link: authLink.concat(link),
		cache: new InMemoryCache()
	});
	return client;
}
