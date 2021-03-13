import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import { DefaultItem, ActiveItem } from "./Layout/NavBar/MenuBar/Item";
import Content from "./Layout/Main";
import TabBar from "./Layout/TabBar";
import { DefaultTab, ActiveTab } from "./Layout/TabBar/Tab";
import SearchInput from "./Layout/Search/Input";
import { Newsletter } from "./Layout/Sections";

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
        <Content>
            <TabBar>
                <ActiveTab href="#">Лекарства</ActiveTab>
                <DefaultTab href="#">Лекарства для животных</DefaultTab>
            </TabBar>
            <SearchInput />
        </Content>
        <Newsletter />
    </React.Fragment>
);

export default Main;
