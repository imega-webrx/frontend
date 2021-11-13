/* eslint-disable complexity */
import { useQuery } from "@apollo/client";
import React from "react";
import tw from "twin.macro";
// import { GET_OFFERS, GET_OFFERS_ID } from "../../../graphql/queries";
import { GET_PRODUCT_OFFERS } from "../../../graphql/queries";

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
    // console.log(data);

    return (
        <OfferListBlock>
            {/* <GetOfferIds subject={productId} /> */}

            {data.getOffersOfProductById.map((offer) => (
                <Offer key={offer.id}>
                    <ProductTitle>
                        АНАЛЬГИН 500МГ. № 20ТАБ. (ICN ЛЕКСРЕДСТВА Г.КУРСК
                        РОССИЯ)
                    </ProductTitle>
                    <Pharmacy>{offer.seller}</Pharmacy>
                    <Price>{offer.prices}</Price>
                    <BuyBtn>Заказать</BuyBtn>
                </Offer>
            ))}
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
const ProductTitle = tw("a")`
    text-xs underline
`;
const Pharmacy = tw("a")`
    text-xs underline
`;
const Price = tw("h3")`

`;
const BuyBtn = tw("button")`
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
