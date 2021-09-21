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

const Header = () => {

    return (
        <HeaderContainer title="Поиск">
            <NavBar>
                <MenuBar>
                    <NavLink exact to="/" className={navlinkCSS} activeClassName={navlinkActiveCSS}>
                        О WebRx
                    </NavLink>
                    <NavLink to="insurance" className={navlinkCSS} activeClassName={navlinkActiveCSS}>
                        Страхование
                    </NavLink>
                    <NavLink to="/news" className={navlinkCSS} activeClassName={navlinkActiveCSS}>Новости</NavLink>
                    <NavLink to="/addCompany" className={navlinkCSS} activeClassName={navlinkActiveCSS}>Добавить компанию</NavLink>
                </MenuBar>
            </NavBar>
        </HeaderContainer>
    );
};

const navlinkCSS = "bg-transparent border-0 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
const navlinkActiveCSS = "border-0 cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";

const Container = tw("div")`bg-gray-800`;
const Nav = tw("nav")`hidden md:block`;

export default Header;
