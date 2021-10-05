/* eslint-disable complexity */
import React from "react";
import tw from "twin.macro";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./graphql/queries";
import { searchValueVar } from "./graphql/localStore";
import OfferItem from "./Layout/OfferItem";

const SearchResult = () => {
    console.log("search: ", searchValueVar());

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { title: searchValueVar() },
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return console.log("Error");
    }

    const offers = data.product.map((offer) => (
        <OfferItem offer={offer} key={offer.id} />
    ));

    return (
        <Layout>
            <ListContainer>
                {offers.length ? offers : <h2>Ничего не найдено</h2>}
            </ListContainer>
        </Layout>
    );
};

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;

const ListContainer = tw("div")`
    bg-white overflow-hidden rounded-md
`;

export default SearchResult;
