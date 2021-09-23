/* eslint-disable complexity */
import React from "react";
import tw from "twin.macro";
import OfferItem from "./Layout/OfferItem";

const SearchResult = () => {
    const OFFERS = [
        {
            id: 1,
            name: "ZDRAVODERM КРЕМ БАЛЬЗАМ ВОССТАНОВИТЕЛЬ КОЖИ N1 С АНТИБАКТЕРИАЛЬНЫМ И АНТИСЕПТИЧЕСКИМ ЭФФЕКТОМ 15МЛ",
            img: "https://images.apteka.ru/medium_58c04557-10d2-4c14-b2d3-ff18d2c4f52e.jpeg",
            price: 880,
            pharmacyName: "Apteka.ru",
            pharmacyLink: "https://apteka.ru/",
        },
        {
            id: 2,
            name: "ALCON AIR OPTIX AQUA КОНТАКТНЫЕ ЛИНЗЫ ПЛАНОВОЙ ЗАМЕНЫ /-5,75/ N3",
            img: "https://cdn1.ozone.ru/multimedia/1023347160.jpg",
            price: 1570,
            pharmacyName: "Apteka.ru",
            pharmacyLink: "https://apteka.ru/",
        },
        {
            id: 3,
            name: "Аскорбиновая Кислота Мелиген порошок для приготовления раствора для приема внутрь 2,5г 1 шт. (Бад)",
            img: "https://static3.asna.ru//imgprx/teWqRcAOQiQGseTWr1N1ztasw2PaM5jkuQ9BYITW4xI/s:170:120:1/q:100/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2Q2Mi9kNjJlMzllZGQ3MDhiMzc3MDY3MzE3OWE4NTQwMzJlNy80ZTYwZDBkYjg0MDg4NWY1M2U2OTAwNzhhZGU0Yjc4ZS5qcGc.jpg?auto=format&fit=max&w=256",
            price: 5,
            pharmacyName: "асна",
            pharmacyLink: "https://asna.ru/",
        },
    ];

    return (
        <Layout>
            <ListContainer>
                {OFFERS.map((offer) => (
                    <OfferItem offer={offer} key={offer.id} />
                ))}
            </ListContainer>
        </Layout>
    );
};

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;

const ListContainer = tw("div")`
    bg-white overflow-hidden rounded-md
`;

export default SearchResult;
