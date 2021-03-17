import React from "react";
import tw from "twin.macro";

import Logo from "./Logo";

const Main = ({ children }) => (
    <MenuBar>
        <Logo />
        <Container>
            <Column>{children}</Column>
        </Container>
    </MenuBar>
);

const MenuBar = tw("div")`flex items-center`;
const Container = tw("div")`hidden md:block`;
const Column = tw("div")`ml-10 flex items-center space-x-4 `;

export default Main;
