import React from "react";
import tw from "twin.macro";

const Main = ({ children }) => (
    <Container>
        <Column>
            <Blank>{children}</Blank>
        </Column>
    </Container>
);

const Container = tw("main")`-mt-32`;
const Column = tw("div")`max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8`;
const Blank = tw("div")`bg-white rounded-lg shadow px-5 py-6 sm:px-6`;

export default Main;
