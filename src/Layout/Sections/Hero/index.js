import React from "react";
import tw from "twin.macro";

const Hero = () => (
    <Container>
        <HeroTitle>
            PharmWorldService — это сайт для быстрого поиска препарата и
            сравнения цен
        </HeroTitle>
        <FeaturesText>
            <FeaturesItem>
                <JustText>Выгодные условия в любой стране</JustText>
            </FeaturesItem>
            <FeaturesItem>
                <JustText>Аналоги для любого лекарства</JustText>
            </FeaturesItem>
            <FeaturesItem>
                <JustText>Удобный формат поиска</JustText>
            </FeaturesItem>
        </FeaturesText>
        <AdditionalText>
            Нет необходимости искать лекарства по отдельности в каждой
            интернет-аптеке
        </AdditionalText>
    </Container>
);
const Container = tw("div")`
    text-center
    bg-white
    p-20
    px-8
    space-y-10
`;
const HeroTitle = tw("h2")`
    text-xl font-extrabold text-gray-900 sm:text-2xl
`;
const FeaturesText = tw("ul")`
    grid
    grid-cols-1
    gap-10
    sm:grid-cols-3
`;
const FeaturesItem = tw("li")`
`;
const JustText = tw("p")`
    p-4
    shadow-md
    text-base
    text-gray-500
    `;
const AdditionalText = tw("p")``;
export { Hero };
