import React from "react";
import tw from "twin.macro";

import SearchIcon from "./icon/search.svg";

const SearchInput = () => (
    <Container>
        <Column>
            <Control>
                <Label for="search">Search</Label>
                <Relative>
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
                    />
                </Relative>
            </Control>
        </Column>
        <Column>
            <Button>Искать</Button>
        </Column>
    </Container>
);

const Button = tw("a")`
    inline-flex
    items-center
    px-4
    py-2
    border
    border-transparent
    text-sm
    font-medium
    rounded-md
    shadow-sm
    text-white
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    xl:col-span-2
    bg-indigo-500
`;

const Container = tw("div")`xl:grid xl:grid-cols-12 lg:gap-8`;
const Icon = tw("div")`h-5 w-5 text-gray-400`;

const Column = tw("div")`
    flex
    items-center
    px-6
    py-4
    md:max-w-3xl
    md:mx-auto
    lg:max-w-none
    lg:mx-0
    xl:px-0
    xl:col-span-6
`;

const Control = tw("div")`w-full`;
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
    rounded-md
    py-2
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
