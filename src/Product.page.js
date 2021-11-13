/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./graphql/queries";
// import Specifications from "./Layout/Product/Specifications/Specifications";
import TabBar from "./Layout/Product/TabBar/TabBar";
import OfferList from "./Layout/Product/Offers/OfferList";

const Product = (props) => {
    const [productUuid, setProductUuid] = useState(props.match.params.id);

    useEffect(() => {
        setProductUuid(props.match.params.id);
    }, [props.match]);

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { uuIds: [productUuid] },
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return console.log("Error");
    }

    if (!data.getProducts.length && !data.getProducts) {
        return <h2>Продукт не найден</h2>;
    }

    const product = data.getProducts[0];

    return (
        <Layout>
            <ListContainer>
                <ProductBlock>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductInfo>
                        <ImgBlock>
                            <ProductImg src="https://osnova-k.ru/images/no-image.jpg" />
                        </ImgBlock>
                        <DescriptionBlock>
                            <DescriptionItem>
                                <DescriptionTitle>
                                    Форма выпуска:
                                </DescriptionTitle>
                                <DescriptionBody>
                                    {product.description}
                                </DescriptionBody>
                            </DescriptionItem>

                            <DescriptionItem>
                                <DescriptionTitle>
                                    Действующее вещество Анальгин:
                                </DescriptionTitle>
                                <DescriptionBody>
                                    Метамизол натрия
                                </DescriptionBody>
                            </DescriptionItem>

                            <DescriptionItem>
                                <DescriptionTitle>
                                    Условия отпуска Анальгин:
                                </DescriptionTitle>
                                <DescriptionBody>Без рецепта</DescriptionBody>
                            </DescriptionItem>

                            <DescriptionItem>
                                <DescriptionTitle>Страна:</DescriptionTitle>
                                <DescriptionBody>Россия</DescriptionBody>
                            </DescriptionItem>
                        </DescriptionBlock>
                        <PriceBlock>
                            <PriceBody>
                                <PriceText>Цена от </PriceText>
                                <Price>20 ₽</Price>
                            </PriceBody>
                            <BuyButton>Купить</BuyButton>
                        </PriceBlock>
                    </ProductInfo>

                    <TabBar />

                    <OfferList productId={data.getProducts[0].id} />

                    {/* <Specifications /> */}
                </ProductBlock>
            </ListContainer>
        </Layout>
    );
};

const Layout = tw("div")`
    max-w-7xl mx-auto sm:px-6 lg:px-8
`;

const ListContainer = tw("div")`
    bg-white overflow-hidden rounded-md
`;

const ProductBlock = tw("div")`
    py-8 px-4
`;

const ProductTitle = tw("h2")`
    text-2xl font-medium mb-8
`;
const ProductInfo = tw("div")`
    flex flex-col sm:flex-row
    sm:flex-wrap md:flex-nowrap
    lg:max-h-64
`;
const ImgBlock = tw("div")`
    w-full sm:w-4/12 md:w-3/12
    h-40 md:h-auto
    order-1 md:order-none
    mr-0 sm:mr-8
`;
const DescriptionBlock = tw("div")`
    w-full sm:w-full md:w-5/12
    order-3 md:order-none
    mt-4 md:mt-0
    mr-0 md:mr-8
`;
const PriceBlock = tw("div")`
    w-full sm:w-5/12 md:w-3/12
    order-2 md:order-none
    pl-0 sm:pl-12
    mt-4 sm:mt-0
    ml-auto
    border-none sm:border-l-2
    border-dashed border-gray-200
`;
const ProductImg = tw("img")`
    w-full h-full
    object-none sm:object-cover md:object-contain
`;
const DescriptionItem = tw("div")`
    flex flex-col mb-2
`;
const DescriptionTitle = tw("h3")`
    text-sm font-medium mb-2
`;
const DescriptionBody = tw("p")`
    text-xs font-light
`;
const PriceBody = tw("div")`

`;
const PriceText = tw("span")`
    text-base mr-2
`;
const Price = tw("h4")`
    inline font-bold text-2xl leading-normal
`;
const BuyButton = tw("button")`
    mt-3
    md:w-full
    px-8
    py-2
    border
    border-transparent
    text-center
    text-base
    font-medium
    rounded-xl
    text-white
    uppercase
    tracking-wider
    bg-blue-800
    shadow-sm
    hover:bg-gray-900
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-indigo-500
    cursor-pointer
`;

export default Product;
