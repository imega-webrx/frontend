import React from "react";
import tw from "twin.macro";

const Header = (props) => (
    <Container>
        <Nav>{props.children}</Nav>
    </Container>
);

const Container = tw("div")`hidden md:block bg-gray-800`;
const Nav = tw("nav")``;

export default Header;
