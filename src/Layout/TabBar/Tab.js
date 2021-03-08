import React from "react";
import tw from "twin.macro";

const DefaultTab = tw("a")`
    border-transparent
    text-gray-500
    hover:text-gray-700
    hover:border-gray-300
    whitespace-nowrap
    py-4
    px-1
    border-b-2
    font-medium
    text-sm
`;

const ActiveTabStyle = tw("a")`
    border-indigo-500
    text-indigo-600
    whitespace-nowrap
    py-4
    px-1
    border-b-2
    font-medium
    text-sm
`;

const ActiveTab = ({ children }) => (
    <ActiveTabStyle ariaCurrent="page">{children}</ActiveTabStyle>
);

export { DefaultTab, ActiveTab };
