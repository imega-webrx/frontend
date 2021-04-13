import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import Footer from "./Layout/Footer";

import { DefaultItem, ActiveItem } from "./Layout/NavBar/MenuBar/Item";
import {
    Newsletter,
    Ready,
    Feature,
    Hero,
    SearchSection,
} from "./Layout/Sections";

const Main = () => (
    <React.Fragment>
        <Header title="Поиск">
            <NavBar>
                <MenuBar>
                    <ActiveItem href="#">О WebRx</ActiveItem>
                    <DefaultItem href="#">Поиск по состоянию здоровья</DefaultItem>
                    <DefaultItem href="#">Контакты</DefaultItem>
                    <DefaultItem href="#">Новости</DefaultItem>
                    <DefaultItem href="#">Добавить компанию</DefaultItem>
                </MenuBar>
            </NavBar>
        </Header>
        <SearchSection />
        <Hero />
        <Ready />
        <Feature />
        <Newsletter />
        <Footer/>
    </React.Fragment>
);

export default Main;
