import React from "react";
import tw from "twin.macro";
import { MobileMenu } from "../NavBar/MobileMenu";

const Header = (props) => (
    <Container>
        <Nav>{props.children}</Nav>
        <MobileMenu />
    </Container>
);

const Container = tw("div")`bg-gray-800`;
const Nav = tw("nav")`hidden md:block`;

export default Header;
