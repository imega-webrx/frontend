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

export const GET_PRODUCT_OFFERS = gql`
    query Query($subject: ID!) {
        getOffersOfProductById(subject: $subject) {
            id
            seller
            prices
        }
    }
`;

// export const GET_OFFERS = gql`
//     query Query($uuIds: [ID]!) {
//         getOffers(uuIds: $uuIds) {
//             id
//             seller
//             prices
//         }
//     }
// `;
