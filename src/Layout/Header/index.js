import React from "react";
import { NavLink } from "react-router-dom";
import tw from "twin.macro";

import NavBar from "../NavBar";
import MenuBar from "../NavBar/MenuBar";
import { MobileMenu } from "../NavBar/MobileMenu";

const HeaderContainer = (props) => (
    <Container>
        <Nav>{props.children}</Nav>
        <MobileMenu />
    </Container>
);

<<<<<<< HEAD
const Header = () => {

=======
const Header = (props) => {
>>>>>>> 6d2192466ce7c4a84f7e90a167aefc9d4d956e68
    return (
        <HeaderContainer title="Поиск">
            <NavBar>
                <MenuBar>
                    <NavLink
                        exact
                        to="/"
                        className={navlinkCSS}
                        activeClassName={navlinkActiveCSS}
                    >
                        О WebRx
                    </NavLink>
<<<<<<< HEAD
                    <NavLink to="insurance" className={navlinkCSS} activeClassName={navlinkActiveCSS}>
                        Страхование
                    </NavLink>
                    <NavLink to="/news" className={navlinkCSS} activeClassName={navlinkActiveCSS}>Новости</NavLink>
                    <NavLink to="/addCompany" className={navlinkCSS} activeClassName={navlinkActiveCSS}>Добавить компанию</NavLink>
=======
                    <NavLink
                        to="searchResult"
                        className={navlinkCSS}
                        activeClassName={navlinkActiveCSS}
                    >
                        Поиск по состоянию здоровья
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={navlinkCSS}
                        activeClassName={navlinkActiveCSS}
                    >
                        Контакты
                    </NavLink>
                    <NavLink
                        to="/news"
                        className={navlinkCSS}
                        activeClassName={navlinkActiveCSS}
                    >
                        Новости
                    </NavLink>
                    <NavLink
                        to="/addCompany"
                        className={navlinkCSS}
                        activeClassName={navlinkActiveCSS}
                    >
                        Добавить компанию
                    </NavLink>
>>>>>>> 6d2192466ce7c4a84f7e90a167aefc9d4d956e68
                </MenuBar>
            </NavBar>
        </HeaderContainer>
    );
};

const navlinkCSS =
    "bg-transparent border-0 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
const navlinkActiveCSS =
    "border-0 cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";

const Container = tw("div")`bg-gray-800`;
const Nav = tw("nav")`hidden md:block`;

export default Header;
