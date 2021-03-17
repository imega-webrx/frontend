import React from "react";
import tw from "twin.macro";
import logo from "./logo.jpg";

const Logo = () => (
    <Container>
        <Img src={logo} alt="company logo" />
    </Container>
);

const Container = tw("div")`flex-shrink-0`;
const Img = tw("img")`h-12 w-12`;

export default Logo;
