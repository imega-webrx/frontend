import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import { DefaultItem, ActiveItem } from "./Layout/NavBar/MenuBar/Item";
import {
    Team,
    Newsletter,
    Ready,
    Hero,
    SearchSection,
} from "./Layout/Sections";

const Main = () => (
    <React.Fragment>
        <Header title="Поиск">
            <NavBar>
                <MenuBar>
                    <ActiveItem href="#">Поиск</ActiveItem>
                    <DefaultItem href="#">О нас</DefaultItem>
                </MenuBar>
            </NavBar>
        </Header>
        <SearchSection />
        <Hero />
        <Ready />
        <Team />
        <Newsletter />
    </React.Fragment>
);

export default Main;
