import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import Footer from "./Layout/Footer";

import { DefaultItem } from "./Layout/NavBar/MenuBar/Item";
import {
    Newsletter,
    Ready,
    Feature,
    Hero,
    SearchSection,
} from "./Layout/Sections";

const Main = () => {
    return (
        <React.Fragment>
            <Header title="Поиск">
                <NavBar>
                    <MenuBar>
                        <DefaultItem href="#">Страхование</DefaultItem>
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
            <Footer />
        </React.Fragment>
    );
};

export default Main;
