import React from "react";
import tw from "twin.macro";

const Main = ({ children }) => (
    <MenuBar>
        <Container>
            <Column>{children}</Column>
        </Container>
    </MenuBar>
);

const MenuBar = tw("div")`flex items-center`;
const Container = tw(
    "div"
)`hidden md:ml-6 md:flex md:items-center md:space-x-4`;
const Column = tw("div")`ml-10 flex items-center space-x-4`;

export default Main;
