/* eslint-disable complexity */
import React, { useState } from "react";
import tw from "twin.macro";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "./graphql/queries";
import { searchValueVar } from "./graphql/localStore";
import OfferItem from "./Layout/OfferItem";
import Pagination from "./Layout/Pagination";

const SearchResult = () => {
    const [page, setPage] = useState(1);
    const onChangePage = (e) => {
        e.preventDefault();
        setPage(Number(e.target.value));
    };

    const { loading, error, data } = useQuery(FEED_QUERY, {
        variables: { title: searchValueVar(), currPage: page },
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        console.log(JSON.stringify(error, null, 2));
    }

    //console.log("INFO: ", data, error, loading);

    const offers = data.paginationProduct.products.map((offer) => (
        <OfferItem offer={offer} key={offer.id} />
    ));

    return (
        <Layout>
            <ListContainer>
                {offers.length ? offers : <h2>Ничего не найдено</h2>}
            </ListContainer>
            <Pagination
                page={page}
                onChangePage={onChangePage}
                length={data.paginationProduct.length}
            />
        </Layout>
    );
};

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;

const ListContainer = tw("div")`
    bg-white overflow-hidden rounded-md
`;

export default SearchResult;
