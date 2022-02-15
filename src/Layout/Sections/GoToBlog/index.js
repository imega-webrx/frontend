import React from "react";
import tw from "twin.macro";

const GoToBlog = () => (
    <Section>
        <Title>
            Мы ведем свой блог, на котором рассказываем новости фармрынка и
            делимся советами
        </Title>
        <GetStartedLink href="#">Перейти в блог</GetStartedLink>
    </Section>
);

const Section = tw("div")`
max-w-7xl space-y-4
mx-auto py-12 px-2
text-center
bg-gray-50
sm:px-6
md:flex
md:space-x-10
lg:px-8
lg:py-16
`;
const Title = tw("h2")`text-xl font-extrabold text-gray-900 sm:text-2xl`;
const GetStartedLink = tw("a")`
block
px-8 py-4
text-2xl font-medium text-white
rounded-md
bg-indigo-600 hover:bg-indigo-700`;

export { GoToBlog };
