/* eslint-disable complexity */
import React, { useState } from "react";
import tw from "twin.macro";
import Bell from "./icon/bell.svg";

const MobileMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onToggleMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };

    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

    const onToggleProfileMenu = () => {
        setIsOpenProfileMenu((prev) => !prev);
    };

    return (
        <>
            <Header>
                <MenuBtn type="button" onClick={() => onToggleMenu()}>
                    {!isOpenMenu ? (
                        <MenuOpen
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
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </MenuOpen>
                    ) : (
                        <MenuClose
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
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </MenuClose>
                    )}
                </MenuBtn>
            </Header>

            {isOpenMenu ? (
                <MobileMenuContainer>
                    <Menu>
                        <LinkDefault href="/">О WebRx</LinkDefault>
                        <LinkHover href="/">
                            Поиск по состоянию здоровья
                        </LinkHover>
                        <LinkHover href="/">Контакты</LinkHover>
                        <LinkHover href="/">Новости</LinkHover>
                        <LinkHover href="/">Добавить компанию</LinkHover>
                    </Menu>

                    <Footer>
                        <Communication>
                            <ProfileMenuBtn
                                type="button"
                                onClick={() => onToggleProfileMenu()}
                            >
                                <ImgBlock>
                                    <Img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt=""
                                    />
                                </ImgBlock>
                                <Person>
                                    <PersonName>Tom Cook</PersonName>
                                    <PersonEmail>tom@example.com</PersonEmail>
                                </Person>
                            </ProfileMenuBtn>
                            <BellIcon>
                                <BellIconSpan>
                                    Показать уведомления
                                </BellIconSpan>
                                <BellIconSVG>
                                    <Bell />
                                </BellIconSVG>
                            </BellIcon>
                        </Communication>
                        {isOpenProfileMenu ? (
                            <ProfileMenu>
                                <LinkPM href="/">Профиль</LinkPM>
                                <LinkPM href="/">Настройки</LinkPM>
                                <LinkPM href="/">Выйти</LinkPM>
                            </ProfileMenu>
                        ) : null}
                    </Footer>
                </MobileMenuContainer>
            ) : null}
        </>
    );
};

const Footer = tw("div")`
    pt-4 pb-3 border-t border-gray-700
`;

const Communication = tw("div")`
    flex items-center px-5 justify-between
`;

const ProfileMenuBtn = tw("button")`
    flex
    bg-transparent
    border-none
    outline-none
    cursor-pointer
    text-left
`;

const ImgBlock = tw("div")`
    flex-shrink-0
`;

const Img = tw("img")`
    h-10 w-10 rounded-full
`;

const Person = tw("div")`
    ml-3
`;

const PersonName = tw("div")`
    text-base font-medium text-white
`;

const PersonEmail = tw("div")`
    text-sm font-medium text-gray-400
`;

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
    cursor-pointer
`;
const BellIconSpan = tw("span")`sr-only`;
const BellIconSVG = tw("svg")`h-6 w-6`;

const ProfileMenu = tw("div")`
    mt-3 px-2 space-y-1 md:hidden
`;

const LinkPM = tw("a")`
    block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700
`;

const MobileMenuContainer = tw("div")`md:hidden`;

const Menu = tw("div")`
    px-2 pt-2 pb-3 space-y-1
`;

const LinkDefault = tw("a")`
    bg-gray-900
    text-white 
    block 
    px-3 
    py-2 
    rounded-md 
    text-base 
    font-medium
`;

const LinkHover = tw("a")`
    block    
    text-gray-300
    hover:bg-gray-700 
    hover:text-white  
    px-3 
    py-2 
    rounded-md 
    text-base 
    font-medium
`;

const Header = tw("div")`
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
    flex items-center justify-end h-16
    -mr-2 flex md:hidden
`;

const MenuBtn = tw("button")`
    inline-flex 
    items-center
    justify-center
    p-2
    rounded-md
    text-gray-400
    border-none
    hover:text-white
    hover:bg-gray-700
    focus:outline-none
    focus:ring-2
    focus:ring-inset
    focus:ring-white
    cursor-pointer
`;

const MenuOpen = tw("svg")`
    block h-6 w-6
`;

const MenuClose = tw("svg")`
    block h-6 w-6
`;

export { MobileMenu };
