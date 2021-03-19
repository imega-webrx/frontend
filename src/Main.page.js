import React from "react";

import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import MenuBar from "./Layout/NavBar/MenuBar";
import { RightMenu } from "./Layout/NavBar/RightMenu";
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
                    <ActiveItem href="#">Dashboard</ActiveItem>
                    <DefaultItem href="#">Team</DefaultItem>
                    <DefaultItem href="#">Projects</DefaultItem>
                    <DefaultItem href="#">Calendar</DefaultItem>

                    <RightMenu />
                </MenuBar>
            </NavBar>
        </Header>
        <SearchSection />
        <Hero />
        <Ready />
        <Feature />
        <Newsletter />
    </React.Fragment>
);

export default Main;
