import React from "react";
import { ApolloProvider, ApolloClient, ApolloLink } from "@apollo/client";

const client = new ApolloClient({
    link: ApolloLink.from([restLink]),
});

const Connector = () => (
    <ApolloProvider client={client}>
        <Search />
    </ApolloProvider>
);

export default Connector;
