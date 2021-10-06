import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query Query($title: String!) {
        product(title: $title) {
            id
            title
            price
        }
    }
`;

export const FEED_QUERY = gql`
    query Query($title: String!, $currPage: Int!) {
        paginationProduct(title: $title, currPage: $currPage) {
            products {
                id
                title
                price
            }
            totalCount
    }}
`;
