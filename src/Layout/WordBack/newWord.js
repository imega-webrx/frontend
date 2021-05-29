import React from "react";
import styled from "@emotion/styled";
import { ApolloProvider, ApolloClient, ApolloLink, HttpLink, InMemoryCache, gql, useQuery, graphql} from "@apollo/client";


function ShowWords() {
    const BigWord = styled.div`
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
    `
    const client = new ApolloClient({
        link: ApolloLink.from([HttpLink]),
        cache: new InMemoryCache(),
    });

    const GET_PRODUCT = gql`
    query Query($title: String!){
        product(title: $title){
            price
      }
    }
    `
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { title: "Валидол" },
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <ApolloProvider client={client}>
            <BigWord>{data.product.price}</BigWord>;
        </ApolloProvider>
    );
}

export default ShowWords;