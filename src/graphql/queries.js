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
