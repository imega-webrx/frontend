import React from "react";
import tw from "twin.macro";

const Ready = () => (
    <Section>
        <Title>Для этого достаточно перейти в чат</Title>
        <GetStartedLink href="#">Написать</GetStartedLink>
    </Section>
);

const Section = tw(
    "div"
)`bg-gray-50 max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8 text-center space-y-10`;
const Title = tw("h2")`text-xl font-extrabold text-gray-900 sm:text-2xl`;
const GetStartedLink = tw(
    "a"
)`inline-flex px-8 py-4 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700`;

export { Ready };
