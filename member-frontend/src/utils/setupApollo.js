import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HTTP_URL } from "./constants";

export default function(persistedState = undefined) {
	const httpLink = new HttpLink({
		uri: HTTP_URL
	});

	const client = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache()
	});
	return client;
}
