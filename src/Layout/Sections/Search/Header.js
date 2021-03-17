import React from "react";
import tw from "twin.macro";

const Header = () => {
    return (
        <HeaderLayout>
            <Title>
                <TitleBlock>WebRx</TitleBlock>
                <TitleBlock>Перестаньте переплачивать!</TitleBlock>
            </Title>
            <Text>Сравните цены и съэкономьте до 80%</Text>
        </HeaderLayout>
    );
};

const HeaderLayout = tw("section")`
    max-w-2xl
    mx-auto
    text-center
    py-16 px-4
    sm:pt-20
    sm:pb-14
    sm:px-6
    lg:px-8
`;
const Title = tw("h2")`text-3xl font-extrabold text-gray-800 sm:text-4xl`;
const TitleBlock = tw("span")`block`;
const Text = tw("p")`mt-4 text-lg leading-6 text-gray-600`;

export { Header };
