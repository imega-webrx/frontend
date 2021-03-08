import React from "react";
import tw from "twin.macro";

const Logo = () => (
    <Container>
        <Img src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" />
    </Container>
);

const Container = tw("div")`flex-shrink-0`;
const Img = tw("img")`h-8 w-8`;

export default Logo;
