import React, { useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import SearchIcon from "./icon/search.svg";
import {
    ApolloProvider,
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    gql,
    useQuery,
} from "@apollo/client";
import fetch from "cross-fetch";



const graphqlHost = process.env.STORYBOOK_GRAPHQL_HOST || "http://localhost:4000/graphql";

const httpLink = new HttpLink({
    fetch,
    uri: graphqlHost,
});



const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});

const GET_PRODUCT = gql`
    query Query($title: String!) {
        product(title: $title) {
            id
            title
            price
        }
    }
`;

function SearchInput() {
    const [searchValue, setSearchValue] = useState("");
    const [isShowHint, setIsShowHint] = useState(false);
    const minValueHint = 3;
    const handleChange = (event) => {
        setSearchValue(event.target.value);
        setIsShowHint(true);
    };

    function GetProducts() {
        const { loading, error, data } = useQuery(GET_PRODUCT, {
            variables: { title: searchValue },
        });
        if (loading) {
            return <p></p>;
        }
        if (error) {
            return console.log("Error");
        }

        return (
            <div>
                {data.product.map((product) => (
                    <ResultItemName key={product.id}>
                        {product.title}
                        <ResultItemType>{product.price}</ResultItemType>
                    </ResultItemName>
                ))}
            </div>
        );
    }
    function ShowSuggest() {
        return (
            <ApolloProvider client={client}>
                <GetProducts />
            </ApolloProvider>
        );
    }

    return (
        <SearchInputLayout>
            <Container className="group">
                <Control>
                    <Label htmlFor="search">Search</Label>
                    <Relative
                        onBlur={() => {
                            setIsShowHint(false);
                        }}
                    >
                        <IconWrapper>
                            <Icon>
                                <SearchIcon />
                            </Icon>
                        </IconWrapper>
                        <Input
                            id="search"
                            name="search"
                            placeholder="Search"
                            type="search"
                            value={searchValue}
                            onChange={(ev) => handleChange(ev)}
                        />
                    </Relative>
                </Control>
                <Button>Искать</Button>
                {/* hint based on the entered data  */}
                {searchValue.length >= minValueHint && isShowHint ? (
                    <ContainerResults>
                        <ResultList>
                            <ShowSuggest />
                        </ResultList>
                    </ContainerResults>
                ) : null}
            </Container>
            <BadgeLayout>
                <BadgesTitle>Популярные запросы</BadgesTitle>
                <FilterBadges>
                    <Badge>Нурофен</Badge>
                    <Badge>Ксалерто</Badge>
                    <Badge>Детралекс</Badge>
                    <Badge>Кагоцел</Badge>
                    <Badge>Канкор</Badge>
                    <Badge>Ингавирин</Badge>
                </FilterBadges>
            </BadgeLayout>
            <DescriptionLayout>
                WebRX собрал тысячи аптек и ветклиник. Только проверенные
                компании с лицензией. Мы помогаем людям по всей стране.
            </DescriptionLayout>
        </SearchInputLayout>
    );
}

const ContainerResults = styled.div``;

const ResultList = styled.ul`
    background-color: white;

    position: absolute;
    max-width: 640px;
    width: 100%;

    border-radius: 0px 0px 7px 7px;
    cursor: pointer;
`;

const ResultItemName = styled.li`
    color: #6c639f;
    border-bottom: 1px solid #d1d5db;
    :last-child {
        border-bottom: none;
    }
    padding: 20px;
`;
const ResultItemType = styled.p`
    color: #8f9394;
    margin-top: 10px;
`;

const SearchInputLayout = tw("div")`bg-yellow-300 px-4 sm:px-6 lg:px-8 py-2`;
const Container = tw("div")`
    max-w-3xl
    mx-auto
    grid
    grid-cols-12
    grid-rows-2
    sm:grid-rows-none
    gap-y-4
    sm:gap-y-0
`;

const DescriptionLayout = tw("div")`
    flex
    justify-center
    px-3
    py-3
    font-medium
`;

const BadgeLayout = tw("div")`
    hidden
    sm:flex
    flex-col
    py-4
    max-w-3xl
    mx-auto
`;

const BadgesTitle = tw("div")`
    flex
    mt-5
    mb-3
    text-lg
    font-medium
`;

const FilterBadges = tw("div")`
    flex
    flex-col
    space-y-4
    sm:space-y-0
    sm:flex-row
    sm:space-x-4
`;

const Badge = tw("span")`
    inline-flex
    items-center
    px-3
    py-0.5
    rounded-full
    text-sm
    font-medium
    bg-blue-100
    text-blue-800
    cursor-pointer
`;

const Button = tw("a")`
    col-start-5
    col-end-9
    sm:col-span-2
    inline-flex
    items-center
    justify-center
    px-4
    py-2
    border
    border-transparent
    text-sm
    font-medium
    rounded-r-md
    rounded-l-md
    sm:rounded-l-none
    shadow-sm
    text-white
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    xl:col-span-2
    bg-black
    cursor-pointer
    hover:bg-white
    hover:text-black
`;

const Icon = tw("div")`h-5 w-5 text-gray-400`;

const Control = tw("div")`
    col-span-12
    sm:col-span-10
`;
const Label = tw("label")`sr-only`;
const Relative = tw("div")`relative`;

const IconWrapper = tw(
    "div"
)`pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center`;

const Input = tw("input")`
    block
    w-full
    bg-white
    border
    border-gray-300
    rounded-tl-md
    rounded-r-md
    sm:rounded-r-none
    py-4
    pl-10
    pr-3
    text-sm
    placeholder-gray-500
    focus:outline-none
    focus:text-gray-900
    focus:placeholder-gray-400
    focus:ring-1
    sm:text-sm
`;

export default SearchInput;
