import React from "react";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import mobile from "./mobile.css";
import { ActiveItem, DefaultItem } from "../MenuBar/Item";

const MobileMenu = () => (
    <Container>
        <Menu disableOverlayClick right styles={mobile}>
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
    justify-end
    md:hidden
`;

export default MobileMenu;
