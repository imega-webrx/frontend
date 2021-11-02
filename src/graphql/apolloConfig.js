import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";

import fetch from "cross-fetch";
import { cache } from "./cache";

const graphqlHost =
    process.env.STORYBOOK_GRAPHQL_HOST || "http://localhost:4000/graphql";

// const graphqlHost = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
    fetch,
    uri: graphqlHost,
});

const client = new ApolloClient({
    cache: cache,
    link: ApolloLink.from([httpLink]),
});

export default client;
