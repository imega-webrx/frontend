import React from "react";
import tw from "twin.macro";

const OfferList = () => {




    return (
        <OfferListBlock>
            <Offer>
                <ProductTitle>
                    АНАЛЬГИН 500МГ. № 20ТАБ. (ICN ЛЕКСРЕДСТВА Г.КУРСК РОССИЯ)
                </ProductTitle>
                <Pharmacy>
                    Aptekayg.ru
                </Pharmacy>
                <Price>
                    16 руб
                </Price>
                <BuyBtn>
                    Заказать
                </BuyBtn>
            </Offer>
            <Offer>
                <ProductTitle>
                    АНАЛЬГИН 500МГ. № 20ТАБ. (ICN ЛЕКСРЕДСТВА Г.КУРСК РОССИЯ)
                </ProductTitle>
                <Pharmacy>
                    Aptekayg.ru
                </Pharmacy>
                <Price>
                    16 руб
                </Price>
                <BuyBtn>
                    Заказать
                </BuyBtn>
            </Offer>
            <Offer>
                <ProductTitle>
                    АНАЛЬГИН 500МГ. № 20ТАБ. (ICN ЛЕКСРЕДСТВА Г.КУРСК РОССИЯ)
                </ProductTitle>
                <Pharmacy>
                    Aptekayg.ru
                </Pharmacy>
                <Price>
                    16 руб
                </Price>
                <BuyBtn>
                    Заказать
                </BuyBtn>
            </Offer>
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
    text-base underline
`;
const Pharmacy = tw("a")`
    text-base underline
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
