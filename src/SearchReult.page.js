/* eslint-disable complexity */
import React from "react";
import tw from "twin.macro";
import OfferItem from "./Layout/OfferItem";

const SearchResult = () => {
    return (
        <Layout>
            <ListContainer>
                <OfferItem />
                <OfferItem />
                <OfferItem />
                <OfferItem />
            </ListContainer>
        </Layout>
    );
};

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;

const ListContainer = tw("div")`
    bg-white overflow-hidden rounded-md
`;

export default SearchResult;
