import { gql } from "@apollo/client";

export const SEARCH_PRODUCT = gql`
    query Query($title: String!) {
        searchProduct(title: $title) {
            id
            title
            description
        }
    }
`;

export const GET_PRODUCT = gql`
    query Query($uuIds: [ID]!) {
        getProducts(uuIds: $uuIds) {
            id
            title
            description
        }
    }
`;
