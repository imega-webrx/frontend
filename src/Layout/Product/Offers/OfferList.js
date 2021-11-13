/* eslint-disable complexity */
import { gql, useQuery } from "@apollo/client";
import React from "react";
import tw from "twin.macro";

const GET_PRODUCT_OFFERS = gql`
    query Query($subject: ID!) {
        getOffersOfProductById(subject: $subject) {
            id
            seller
            prices
        }
    }
`;

const OfferList = ({ productId }) => {
    const { loading, error, data } = useQuery(GET_PRODUCT_OFFERS, {
        variables: { subject: productId },
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        console.log("Error", error);

        return <div>Error</div>;
    }

    const offers = data.getOffersOfProductById && data.getOffersOfProductById.length ?
        data.getOffersOfProductById.map((offer) => (
            <Offer key={offer.id}>
                <Pharmacy href="#" target="_blank">{offer.seller}</Pharmacy>
                <Price>{offer.prices}</Price>
                <BuyLink href="#" target="_blank">Заказать</BuyLink>
            </Offer>
        ))
    : null;

    return (
        <OfferListBlock>
            {offers}
        </OfferListBlock>
    );
};

const OfferListBlock = tw("div")`
    py-4
`;
const Offer = tw("div")`
    flex justify-between items-center
    py-6

    border-b
    border-solid
    border-gray-200
`;
const Pharmacy = tw("a")`
    text-xs underline
`;
const Price = tw("h3")`

`;
const BuyLink = tw("a")`
    px-4
    py-1
    border
    border-transparent
    rounded-sm
    text-center
    text-xs
    font-medium
    text-white
    uppercase
    tracking-wider
    bg-blue-600
    shadow-sm
    hover:bg-gray-900
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-indigo-500
    cursor-pointer
`;

export default OfferList;
