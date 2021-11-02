import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query Query($title: String!) {
        searchProduct(title: $title) {
            id
            title
            description
        }
    }
`;
