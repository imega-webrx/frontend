import React from "react";
import tw from "twin.macro";

import SearchIcon from "./icon/search.svg";

const SearchInput = () => (
    <SearchInputLayout>
        <Container className="group">
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
            <Button>Искать</Button>
        </Container>
        <BadgeLayout>
            <FilterBadges>
                <Badge>Анальгин</Badge>
                <Badge>Пенталгин</Badge>
                <Badge>Зовиракс</Badge>
                <Badge>Витамин D</Badge>
            </FilterBadges>
        </BadgeLayout>
    </SearchInputLayout>
);
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

const BadgeLayout = tw("div")`
    hidden
    sm:flex
    py-4
    items-center
    max-w-3xl
    mx-auto
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
    bg-indigo-500
    cursor-pointer
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
    rounded-l-md
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
