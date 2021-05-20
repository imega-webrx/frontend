import React from "react";
import tw from "twin.macro";
import Bell from "./icon/bell.svg";

const RightMenuContainer = tw("div")`flex items-center`;

const BellIcon = tw("button")`
    bg-gray-800
    p-1
    rounded-full
    text-gray-400
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-offset-gray-800
    focus:ring-white
`;
const BellIconSpan = tw("span")`sr-only`;
const BellIconSVG = tw("svg")`h-6 w-6`;

const DropDownContainer = tw("div")`
    hidden
    md:ml-4
    md:flex-shrink-0
    md:flex
    md:items-center
`;

const DropDownMenu = tw("div")`ml-3 relative`;
const DropDownButton = tw(
    "button"
)`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`;
const DropDownSpan = tw("span")`sr-only`;
const DropDownBell = tw("img")`h-8 w-8 rounded-full`;

const RightMenu = () => (
    <RightMenuContainer>
        <DropDownContainer>
            <BellIcon>
                <BellIconSpan>View notifications</BellIconSpan>
                <BellIconSVG>
                    <Bell />
                </BellIconSVG>
            </BellIcon>
            {/* Profile dropdown */}
            <DropDownMenu
                data-todo-x-data="{ open: false }"
                data-todo-at-keydown-escape-stop="open = false"
                data-todo-at-click-away="open = false"
            >
                <DropDownButton
                    type="button"
                    id="user-menu"
                    aria-expanded="false"
                    data-todo-at-click="open = !open"
                    aria-haspopup="true"
                    data-todo-x-bind-aria-expanded="open"
                >
                    <DropDownSpan>Open user menu</DropDownSpan>
                    <DropDownBell
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </DropDownButton>
            </DropDownMenu>
        </DropDownContainer>
    </RightMenuContainer>
);

export { RightMenu };
