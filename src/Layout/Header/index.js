import React from "react";
import tw from "twin.macro";

const Header = (props) => (
    <Container>
        {props.children}
        <Title>
            <Column>
                <H1>{props.title}</H1>
            </Column>
        </Title>
    </Container>
);

const Container = tw("div")`bg-gray-800 pb-32`;
const Title = tw("header")`py-10`;
const Column = tw("div")`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const H1 = tw("h1")`text-3xl font-bold text-white`;

export default Header;
