import React from "react";
import tw from "twin.macro";

const Dropdown = () => {
    return (
        <List aria-disabled>
            <SuggestionLayout>
                <SuggestionLink href="#">
                    <SuggestionContainer>
                        <SuggestionTitle>Title</SuggestionTitle>
                        <SuggestionText>Text</SuggestionText>
                    </SuggestionContainer>
                </SuggestionLink>
            </SuggestionLayout>
            <SuggestionLayout>
                <SuggestionLink href="#">
                    <SuggestionContainer>
                        <SuggestionTitle>Title</SuggestionTitle>
                        <SuggestionText>Text</SuggestionText>
                    </SuggestionContainer>
                </SuggestionLink>
            </SuggestionLayout>
            <SuggestionLayout>
                <SuggestionLink href="#">
                    <SuggestionContainer>
                        <SuggestionTitle>Title</SuggestionTitle>
                        <SuggestionText>Text</SuggestionText>
                    </SuggestionContainer>
                </SuggestionLink>
            </SuggestionLayout>
        </List>
    );
};

const List = tw("ul")`
    divide-y
    divide-gray-200
    absolute
    w-full
    bg-white
    overflow-hidden
    rounded-lg
    sm:shadow
`;
const SuggestionLayout = tw("li")``;
const SuggestionLink = tw("a")`block hover:bg-gray-50`;
const SuggestionContainer = tw("div")`px-4 py-4 sm:px-6`;
const SuggestionTitle = tw(
    "h4"
)`text-sm font-medium text-indigo-600 truncate flex items-center justify-between`;
const SuggestionText = tw("div")`mt-2 flex justify-between`;

export { Dropdown };
