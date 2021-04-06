import React from "react";
import tw from "twin.macro";
import Menu from "react-burger-menu/lib/menus/slide";
import "./mobile.css";
import {ActiveItem, DefaultItem} from "../MenuBar/Item";

const MobileMenu = () => (
    <Container>
        <Menu right>
            <ActiveItem href="#">О WebRx</ActiveItem>
            <DefaultItem href="#">Поиск по состоянию здоровья</DefaultItem>
            <DefaultItem href="#">Контакты</DefaultItem>
            <DefaultItem href="#">Новости</DefaultItem>
            <DefaultItem href="#">Добавить компанию</DefaultItem>
        </Menu>
    </Container>
);

const Container = tw("div")`
    mr-2
    flex
    items-center
    md:hidden
`;

export default MobileMenu;
