import React from "react";
import tw from "twin.macro";

const HeaderContainer = tw("div")`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const HeaderBar = tw("div")`flex justify-between h-16`;

const RightMenuContainer = tw("div")`flex items-center`;

const DropDownContainer = tw(
    "div"
)`hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center`;

const BellIcon = tw(
    "button"
)`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`;
const BellIconSpan = tw("span")`sr-only`;
const BellIconSVG = tw("svg")`h-6 w-6`;

const DropDownMenu = tw("div")`ml-3 relative`;
const DropDownButton = tw(
    "button"
)`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`;
const DropDownSpan = tw("span")`sr-only`;
const DropDownBell = tw("img")`h-8 w-8 rounded-full`;

const RightMenu = () => (
    <React.Fragment>
        <HeaderContainer>
            <HeaderBar>
                <RightMenuContainer>
                    <DropDownContainer>
                        <BellIcon>
                            <BellIconSpan>View notifications</BellIconSpan>
                            <BellIconSVG
                                data-todo-x-description="Heroicon name: outline/bell"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                ></path>
                            </BellIconSVG>
                        </BellIcon>

                        {/* Profile dropdown */}
                        <DropDownMenu
                            data-todo-x-data="{ open: false }"
                            data-todo-at-keydown-escape-stop="open = false"
                            data-todo-at-click-away="open = false"
                        >
                            <div>
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
                            </div>
                        </DropDownMenu>
                    </DropDownContainer>
                </RightMenuContainer>
            </HeaderBar>
        </HeaderContainer>
    </React.Fragment>
);

export { RightMenu };
