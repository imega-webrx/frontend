import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import { DefaultItem, ActiveItem } from "./Layout/NavBar/MenuBar/Item";

const Main = () => (
    <React.Fragment>
        <Header title="Поиск">
            <NavBar>
                <MenuBar>
                    <ActiveItem>Поиск</ActiveItem>
                    <DefaultItem href="#">О нас</DefaultItem>
                </MenuBar>
            </NavBar>
        </Header>
    </React.Fragment>
);

export default Main;
