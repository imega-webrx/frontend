import React from "react";
import styled from "@emotion/styled";
import {
    ApolloProvider,
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

function ShowWords() {
    const BigWord = styled.div`
        font-size: 60px;
        text-align: center;
        margin-top: 50px;
    `;
    const client = new ApolloClient({
        link: ApolloLink.from([HttpLink]),
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <BigWord>Hello Apollo!</BigWord>
        </ApolloProvider>
    );
}

export default ShowWords;
