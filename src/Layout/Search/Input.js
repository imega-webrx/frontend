import React, { useState, useEffect } from "react";

import tw from "twin.macro";
import styled from "@emotion/styled";
import { gql, useQuery } from '@apollo/client';

import SearchIcon from "./icon/search.svg";

function SearchInput() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isShowHint, setIsShowHint] = useState(false);
    const minValueHint = 3;
    const handleChange = (event) => {
        setSearchValue(event.target.value);
        setIsShowHint(true);
    };
    // метот с фетчем принимающий провалидированный title
    function fetchProducts(title) {
        fetch("http://localhost:4000/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                query: `query Products($title: String!){
                            product(title:$title){
                                id
                                title
                                price
                            }
                    }
                `,
                variables: {
                    title: title,
                },
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data.product);
                console.table(res.data.product);
            })
            .catch((err) => {
                console.error(err);
            });
        
    };
    
   
   
   


    useEffect(() => {
        // если длина более 3х, то валидируем и в запрос, а если нет, то пустой массив
        if (searchValue.length >= 3) {
            let regex = /[a-zA-Z\u0400-\u04FF]+/g;
            let m = "";
            let title = "";

            while ((m = regex.exec(searchValue)) !== null) {
                m.forEach((match) => {
                    title += match;
                });
            }
            fetchProducts(title);
        } else {
            setSearchResults([]);
        }
    }, [searchValue]);


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
                            <ResultItemName>
                                Какое-то название, которое подошло под критерии
                                поиска
                            </ResultItemName>
                            <ResultItemType>Лекарственная форма</ResultItemType>
                        </ResultList>
                    </ContainerResults>
                ) : null}
                <ul>
                    {searchResults.map((item) => (
                        <li key={item.id}>
                            {item.title} - {item.price}
                        </li>
                    ))}
                </ul>
            </Container>
            {BooksGet()}
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




function BooksGet() {
    const GET_BOOKS = gql`
    {
        books{
            title
            author
        }
    }
`;
    const { data} = useQuery(GET_BOOKS);
    const BookTitle = styled.div``;
    return (
        <BookTitle name="book">{data.books.title}</BookTitle>
    )
}






const ContainerResults = styled.div``;
const ResultList = styled.ul`
    background-color: white;
    padding: 18px;
    position: absolute;
    max-width: 602px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 0px 0px 7px 7px;
    cursor: pointer;
`;

const ResultItemName = styled.li`
    color: #6c639f;
    margin-bottom: 14px;
    margin-top: 10px;
`;
const ResultItemType = styled.li`
    color: #8f9394;
    margin-bottom: 10px;
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
