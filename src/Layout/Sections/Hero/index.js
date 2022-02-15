import React from "react";
import tw from "twin.macro";

const Hero = () => (
    <Container>
        <HeroTitle>
            PharmWorldService — это сайт для быстрого поиска препарата и
            сравнения цен
        </HeroTitle>
        <FeaturesText>
            <JustText>
                <p>Выгодные условия в любой стране</p>
            </JustText>
            <JustText>
                <p>Аналоги для любого лекарства</p>
            </JustText>
            <JustText>
                <p>Удобный формат поиска</p>
            </JustText>
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
    grid-cols-3
    gap-20
`;
const JustText = tw("li")`
    text-base
    text-gray-500
`;
const AdditionalText = tw("p")``;
export { Hero };
